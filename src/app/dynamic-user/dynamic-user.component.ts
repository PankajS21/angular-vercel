import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-user',
  imports: [],
  templateUrl: './dynamic-user.component.html',
  styleUrl: './dynamic-user.component.css'
})
export class DynamicUserComponent {
  constructor(private route: ActivatedRoute) { }
  id = "";
  course = "";
  age = ""
  ngOnInit() {
    this.route.params.subscribe(data => {
      console.log(data);
      this.id=data['id'];
      this.age=data['age'];
      this.course=data['courseName'];
    })
  }
}
