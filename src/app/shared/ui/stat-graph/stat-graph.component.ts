import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  ViewChild,
} from '@angular/core';
import { Point } from '../../../types';
import { ThemeService } from '@/src/app/services/theme/theme.service';
import { getCssColor, toRgbaString } from '@/src/utils/colors';

@Component({
  selector: 'app-stat-graph',
  standalone: true,
  templateUrl: 'stat-graph.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatGraphComponent implements AfterViewInit {
  @ViewChild('graph', { static: true })
  private canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;

  points = input.required<Point[]>();
  width = input(300);
  height = input(150);

  private themeService = inject(ThemeService);
  private readonly currentTheme = this.themeService.theme;

  private primaryColor!: { r: number; g: number; b: number };

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.primaryColor = this.parseCssHexToRgb('--mat-sys-primary');
    this.draw();
  }

  private draw() {
    const ctx = this.ctx;
    const points = this.points();

    if (!ctx || !points?.length) return;

    ctx.globalCompositeOperation = 'screen';

    this.drawFilledArea(points);
    this.drawLine(points);
    this.drawDataPoints(points);
  }

  private drawFilledArea(points: Point[]) {
    const ctx = this.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 150);

    gradient.addColorStop(0.0, toRgbaString(this.primaryColor, 1));
    gradient.addColorStop(0.3, toRgbaString(this.primaryColor, 0.5));
    gradient.addColorStop(0.6, toRgbaString(this.primaryColor, 0.3));
    gradient.addColorStop(1.0, toRgbaString(this.primaryColor, 0.1));

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.lineTo(points[points.length - 1].x, ctx.canvas.height);
    ctx.lineTo(points[0].x, ctx.canvas.height);
    ctx.closePath();

    ctx.fillStyle = gradient;
    ctx.fill();
  }

  private drawLine(points: Point[]) {
    const ctx = this.ctx;
    const { r, g, b } = this.primaryColor;

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length - 2; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 1)`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  private drawDataPoints(points: Point[]) {
    for (const { x, y } of points) {
      this.drawPoint(x, y);
    }
  }

  private drawPoint(
    x: number,
    y: number,
    radius = 4,
    fillColor = 'white',
    strokeColor = 'cyan'
  ) {
    const ctx = this.ctx;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
  }

  private parseCssHexToRgb(cssVar: string): {
    r: number;
    g: number;
    b: number;
  } {
    const hex = getCssColor(cssVar, this.currentTheme).slice(1);
    const intColor = parseInt(hex, 16);
    return {
      r: (intColor >> 16) & 0xff,
      g: (intColor >> 8) & 0xff,
      b: intColor & 0xff,
    };
  }
}
