import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wireless } from './wireless';

describe('Wireless', () => {
  let component: Wireless;
  let fixture: ComponentFixture<Wireless>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wireless]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wireless);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
