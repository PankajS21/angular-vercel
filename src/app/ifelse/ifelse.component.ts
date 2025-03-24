import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
  // mainDiv = true;
  // hideDiv() {
  //   this.mainDiv = false;
  // }
  // showDiv(){
  //   this.mainDiv=true;
  // }
  // toggle(){
  //   this.mainDiv=!this.mainDiv;
  // }

  // color = 1;

  // handleClick(val: number) {
  //   this.color = val;
  // }

  // handleChange(event: Event) {
  //   this.color = parseInt((event.target as HTMLInputElement).value);
  // }



  // Switch Case


  color = 'yellow';

  handleClick(val: string) {
    this.color = val;
  }
  handleChange(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }
}
