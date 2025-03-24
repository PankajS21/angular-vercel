import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-login',
  imports: [SignupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
