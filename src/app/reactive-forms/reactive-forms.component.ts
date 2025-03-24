import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [FormsModule,NgIf],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  // FormControls


  // name = new FormControl('Rohit');
  // password = new FormControl(60);

  // getValues(){
  //   console.log(this.name.value,this.password.value);
  //   console.log(new FormControl);
  //   this.name.setValue("Suraj");
  //   this.password.setValue(898989898);

  // }




  //FormGroup

  // profile = new FormGroup({
  //   name: new FormControl('Suraj'),
  //   password: new FormControl('Suraj123'),
  //   email: new FormControl('Suraj@test.com')
  // });


  // onSubmit(){
  //   console.log("FormGroup Called!!!")
  // }

  // setValue(){
  //   console.log(this.profile.value)
  // this.profile.setValue({
  //   name:'Rohan',
  //   email:'rohan@gmail.com',
  //   password:'Rohan123',
  // })
  //   this.profile.get('name')?.setValue('Pankaj')
  // }




  // Form Validation in form group


  // profileForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$')]),
  //   password: new FormControl('',[Validators.required,Validators.minLength(5)])
  // });

  // get name() {
  //   return this.profileForm.get('name');
  // }
  // get email() {
  //   return this.profileForm.get('email');
  // }
  // get password() {
  //   return this.profileForm.get('password');
  // }

  // onSubmit(){
  //   console.log('button clicked!!');
  // }


  // userData: any;
  // submitData(val: any | NgForm) {
  //   this.userData = val;
  //   console.log(val)
  // }




  // validation in form

  submitData(val:NgForm){
    console.log(val)
  }
}
