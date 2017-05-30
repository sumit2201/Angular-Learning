import { Component, OnInit } from '@angular/core';


@Component({
// Other component properties removed
  template: `
  <h1>Hey guys!</h1>
  <div *ngIf="myArr; then tmpl1 else tmpl2"></div>

  <ng-template #tmpl1>I'm here</ng-template>
  <ng-template #tmpl2>I'm not here</ng-template>
  <button (click)="myEvent($event)">My Button</button>
  `,
})

export class MyNewComponentComponent {

  myArr = ['him','hers','yours','theirs'];

  myEvent(event) {
    console.log(event);
  }

}
