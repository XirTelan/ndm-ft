import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'network-map',
  template: `
    <div>Test</div>
    <ul>
      @for (item of posts(); track $index) {
      <li>{{ item }}</li>
      }
    </ul>
  `,
})
export class NetworkMap {
  http = inject(HttpClient);
  posts = toSignal(
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((posts) => posts.map((post) => post.id))),
    { initialValue: [] } // Optional initial value
  );
}
