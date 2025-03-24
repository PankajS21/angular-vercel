import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  // count = 10;

  // x = signal(20);

  // constructor() {
  //   effect(() => {
  //     console.log(this.x());
  //     console.log(this.count);
  //   })
  // }

  // increase() {
  //   this.x.set(this.x() + 1)
  // }

  // changeVal(value: string) {
  //   if (value == 'inc') {
  //     this.x.set(this.x() + 2)
  //   } else if (value == 'des') {
  //     this.x.set(this.x() - 2)
  //   }
  // }

  //Set datatype for the value of signals
  // data = signal<number | string>(100);

  //Set data-type for signals also and their value as well

  // data: WritableSignal<number | string | boolean> = signal(250);

  // count:Signal<number>=computed(()=>200)


  // updateData() {
  // this.data.set(true);
  // this.data.update((val)=>val+1)
  // }



  //Computed Signals

  x = signal(10);
  y = signal(20);
  // count =this.x + this.y;
  count = computed(() => this.x() + this.y());

  handleChange() {
    console.log(this.count());
    this.x.set(200);
    console.log(this.count());

  }
}
