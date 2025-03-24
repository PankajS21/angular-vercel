import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  count: number = 0;

  // increment() {
  //   this.count = this.count + 1;
  // }
  // decrement() {
  //   this.count = this.count - 1;
  // }
  // reset() {
  //   this.count = 0;
  // }

  handleCounter(val: string) {
    if (val == "plus") {
      this.count = this.count + 1;
    }
    else if (val == "minus") {
      this.count = this.count - 1;
    }
    else {
      this.count = 0;
    }

    const decrementBtn=this.element.nativeElement.getElementsByClassName("decrement")[0];
    if (this.count == 0) {
      this.renderer.setStyle(decrementBtn,'background','red');
    }else{
      this.renderer.setStyle(decrementBtn,'background','blue');
    }
  }
}
