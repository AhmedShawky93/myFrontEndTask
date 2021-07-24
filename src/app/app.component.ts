import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations:[
  //   trigger('state', [
  //     transition('0 => 1, 0 => 2, 0 => 3, 1 => 0, 1 => 2, 1 => 3, 2 => 0, 2 => 1, 2 => 3, 3=> 0, 3=> 1, 3=> 2,', [
  //       group([
  //         query(':enter',[
  //           style({
  //             transform:'translateX(100%)'
  //           }),
  //           animate(500, style({
  //             transform:'translateX(0)'
  //           }))
  //         ]),
  //         query(':leave',[
  //           style({
  //             transform:'translateX(0)'
  //           }),
  //           animate(500, style({
  //             transform:'translateX(-100%)'
  //           }))
  //         ])
  //       ])
  //     ])
  //   ])
  // ]
})
export class AppComponent {
  title = 'FEnd-task';
  // state: any
  constructor(private router: Router) { }

  isHomeRoute() {
    return this.router.url === '/';
  }
  isNotHomeRoute() {
    return this.router.url !== '/';
  }
}
