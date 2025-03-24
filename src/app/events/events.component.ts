import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  // handleClick(event: any) {
  //   console.log(event.target);
  //   console.log(event.type);
  //   console.log(event);
  //   console.log(event.target.classList)
  //   console.log(event.target.name)
  //   console.log(event.target.value)
  // }


  //Get Input Value

  // name = "";
  // showName = ""
  // handleChange(event: Event) {
  //   this.name = (event.target as HTMLInputElement).value;
  //   console.log(this.name);
  // }
  // showNameFunc() {
  //   this.showName = this.name;
  // }

  // setNameFunc(){
  //   this.name="Pankaj";
  // }



  //Template reference variable

  name = ""

  getValue(value: any) {
    this.name = value;
    console.log(this.name)
  }

  setValue(myElem:any){
    myElem.value="Suraj Singh Rawat"
  }
}
