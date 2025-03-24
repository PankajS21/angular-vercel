import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamic-routes',
  imports: [RouterLink],
  templateUrl: './dynamic-routes.component.html',
  styleUrl: './dynamic-routes.component.css'
})
export class DynamicRoutesComponent {
  users = [
    {
      id: 1,
      name: "Pankaj",
      course: "btech",
      age: 23
    },
    {
      id: 2,
      name: "Suraj",
      course: "BCA",
      age: 18
    },
    {
      id: 3,
      name: "Mohit",
      course: "bcom",
      age: 27
    },
    {
      id: 4,
      name: "Nitish",
      course: "Bed",
      age: 25
    },
    {
      id: 5,
      name: "Rohan",
      course: "mtech",
      age: 22
    },
  ]
}
