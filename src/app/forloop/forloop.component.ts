import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  imports: [],
  templateUrl: './forloop.component.html',
  styleUrl: './forloop.component.css'
})
export class ForloopComponent {
  users = ["Pankaj", "Suraj", "Rohan", "Mohit"];
  students = [
    {
      name: "Pankaj",
      age: 23,
      course: "btech"
    },
    {
      name: "Suraj",
      age: 18,
      course: "BCA"
    },
    {
      name: "Rohan",
      age: 24,
      course: "Mtech"
    },
    {
      name: "Mohit",
      age: 20,
      course: "bcom"
    },
  ];

  getAge(val: number) {
    alert("Age is "+ val);
  }
}
