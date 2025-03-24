import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaybinding',
  imports: [FormsModule],
  templateUrl: './twowaybinding.component.html',
  styleUrl: './twowaybinding.component.css'
})
export class TwowaybindingComponent {
  name = "Pankaj";
  age=23;

  // handleChange(val: Event) {
  //   this.name = (val.target as HTMLInputElement).value;
  // }
}
