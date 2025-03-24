import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }
  // <!-- Passing data on button click -->

  goToProfile() {
    this.router.navigate(['/profile'],{queryParams:{name:'Pankaj',age:23}});
  }
}
