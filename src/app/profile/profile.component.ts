import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private route: ActivatedRoute) { }
  userName: string | null = "";
  age: string | null = null;
  ngOnInit() {
    // this.userName = this.route.snapshot.paramMap.get('name');
    // this.age=this.route.snapshot.paramMap.get('age');
    // console.log(this.userName);
    // console.log(this.age);


    this.route.data.subscribe(data => {
      console.log(data);
      this.userName = data['name'];
      this.age = data['age'];
    })
  }
}
