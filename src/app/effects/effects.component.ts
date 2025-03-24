import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effects',
  imports: [],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.css'
})
export class EffectsComponent {
  count = signal(0);
  display = true;

  constructor() {
    effect(() => {
      console.log(this.count());
      if (this.count() == 2) {
        this.display = true;
        setTimeout(() => {
          this.display = false;
        }, 2000);
      } else {
        this.display = false;
      }
    })
  }

  handleClick() {
    this.count.set(this.count() + 1);
  }

  hidePara() {
    this.display = false;
  }

  togglePara() {
    this.display = !this.display;
  }
}
