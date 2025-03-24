import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-methods',
  imports: [],
  templateUrl: './lifecycle-methods.component.html',
  styleUrl: './lifecycle-methods.component.css'
})
export class LifecycleMethodsComponent {
  @Input() count=0;
  name = "Pankaj Singh";
  // constructor() {
  //   console.log("constructor called!!!");
  //   this.name = "Suraj"
  // }

  // ngOnInit() {
  //   console.log("ngOnInit called!!!")
  // }

  // ngOnDestroy() {
  //   console.log("ngOnDestroy called!!!");
  // }


  ngOnChanges() {
    console.log("ngOnChanges called!")
  }
}
