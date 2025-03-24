import { CommonModule, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  // ngIf directive

  // toggle = true;

  // login = true;

  // handleClick() {
  //   this.login = !this.login
  // }

  // count = 0;
  // increase() {
  //   this.count++;
  // }




  // ngFor directive


  // students = ["Pankaj", "Suraj", "Mohit", "Rohan"];
  // studentsData = [
  //   {
  //     name: "Pankaj",
  //     age: 23,
  //     course: "B.Tech"
  //   },
  //   {
  //     name: "Suraj",
  //     age: 18,
  //     course: "BCA"
  //   },
  //   {
  //     name: "Mohit",
  //     age: 29,
  //     course: "B.Com"
  //   },
  //   {
  //     name: "Rohan",
  //     age: 25,
  //     course: "B.Tech"
  //   },
  // ]




  // ngSwitch directive


  color='red';

  changeColor(colorVal:string){
    this.color=colorVal;
  }
}
