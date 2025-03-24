import { afterNextRender, afterRender, Component, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CounterComponent } from './counter/counter.component';
import { EventsComponent } from './events/events.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { ForloopComponent } from './forloop/forloop.component';
import { SignalsComponent } from './signals/signals.component';
import { EffectsComponent } from './effects/effects.component';
import { ContextualVariableComponent } from './contextual-variable/contextual-variable.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';
import { DirectivesComponent } from './directives/directives.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { DynamicRoutesComponent } from './dynamic-routes/dynamic-routes.component';
import { DynamicUserComponent } from './dynamic-user/dynamic-user.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PropsComponent } from './props/props.component';
import { LiftingStateUpComponent } from './lifting-state-up/lifting-state-up.component';
import { PipesComponent } from './pipes/pipes.component';
import { CurrencyPipe, NgIf } from '@angular/common';
import { CustomPipesPipe } from './pipe/custom-pipes.pipe';
import { LifecycleMethodsComponent } from './lifecycle-methods/lifecycle-methods.component';
import { ProductService } from './services/product.service';
// import { User } from './interfaces/User';
import { FormsModule } from '@angular/forms';
import { User } from './interfaces/User';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LoginComponent, HeaderComponent, CounterComponent, EventsComponent, IfelseComponent, ForloopComponent, SignalsComponent, EffectsComponent, ContextualVariableComponent, TwowaybindingComponent, TodolistComponent, DynamicStyleComponent, DirectivesComponent, LogoutComponent, HomeComponent, DynamicRoutesComponent, DynamicUserComponent, ReactiveFormsComponent, PropsComponent, LiftingStateUpComponent, PipesComponent, CustomPipesPipe, LifecycleMethodsComponent, NgIf, FormsModule,LazyLoadComponent],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  // styles:['h2{background:grey},h3{background:red;}']
  styleUrls: ['./app.component.css', './app.btn.css']
})
export class AppComponent {
  title = 'Pankaj Singh';
  // age = 23;
  // x = 10;
  // y = 100;

  handleClick() {
    console.log("Calling Handle Click Function!!!");
    this.otherClick();
  }

  otherClick() {
    console.log("Other click function called!!!")
  }

  // Knowing About Typescript

  name: string = "Pankaj";
  age: any = 23;
  updateName() {
    this.name = "Suraj";
    this.age = 20;

    this.age = true;

    this.age = "opopop";

    this.age = {
      name: "Pankaj",
      age: 23
    }
    this.sum(60, 70, 90)
  }



  sum(a: number, b: number, c: number) {
    console.log(a + b + c);
  }


  callBoth() {
    this.updateName();
    this.sum(4, 5, 63);
  }


  userName = "Suraj Rawat";
  courseName = "BCA";

  changeUser(val: string) {
    this.userName = val;
  }

  data = ['Suraj', 'Honey', 'Saurabh', 'Rahul', 'Sandeep'];



  //Lifting State Up
  incomingData: undefined | string[];
  handleUsers(val: string[]) {
    console.log(val);
    this.incomingData = val;
  }


  // Custom Pipes


  amount = 2000;



  //Lifecycle methods

  counter = 0;

  onClick() {
    this.counter++;
  }

  ngOnChanges() {
    console.log("kjkjkjk")
  }

  // @ViewChild('lifecycle') LifecycleMethodsComponent: any;
  // constructor(){
  //   afterRender(()=>{
  //     console.log("afterRender called!!!!")
  //   });
  //   afterNextRender(()=>{
  //     console.log("afterNextRender called!!!")
  //   })
  // }



  // Services

  // storeProduct: {
  //   name: string,
  //   price: number
  // }[] | undefined;
  // constructor(private productService: ProductService) {
  //   // this.storeProduct = this.productService.getProductDetails()
  // }

  // loadData(){
  //   this.storeProduct = this.productService.getProductDetails()

  // }

  // allData: any;
  // constructor(private getResponse: ProductService) {

  // }
  // ngOnInit(){
  //   this.getResponse.getData().subscribe((data: any) => {
  //     console.log(data);
  //     this.allData=data;
  //   });
  // }


  //Get Data



  users: User[] = [];
  constructor(private fetchData: ProductService) { }

  ngOnInit() {
    this.getData()
  }


  getData() {
    this.fetchData.getData().subscribe({
      next: (data: User[]) => {
        console.log(data)
        this.users = data;
      },
      error: (error) => console.log(error),
      complete: () => console.log("Done!!!")
    })
  }
  //Post Data
  // constructor(private postDataa: ProductService) { }
  pushData(val: User) {
    if (!this.populateData) {
      console.log(val); // Log the form data
      this.fetchData.postData(val).subscribe((data) => {
        console.log(data);
        this.getData();
      });
    } else {

      //Update data:-----
      const userData = { ...val, id: this.populateData.id }
      this.fetchData.updateUser(userData).subscribe((data) => {
        console.log("data updated");
        console.log(data);
        this.getData()
      })
    }
  }


  //Delete Data

  deleteUser(val: string) {
    this.fetchData.deleteData(val).subscribe((data) => {
      console.log(data);
      if (data) {
        this.getData();
      }
    })
  }

  //Get selected user

  populateData: User | undefined;
  updateUser(id: string) {
    this.fetchData.getSelectedUser(id).subscribe((data) => {
      console.log(data);
      this.populateData = data;
    })
  }



  updateDetails(val: User) {

  }
}
