import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  imports: [CommonModule],
  templateUrl: './dynamic-style.component.html',
  styleUrl: './dynamic-style.component.css'
})
export class DynamicStyleComponent {
  fontSize = "80";
  bgColor = "red";
  paraFontSize = "60px";


  changeFont = false;
  handleFontSize() {
    this.changeFont = !this.changeFont;
  }

  // ngStyle

  ngFontSize="100px";
  ngback="blue";
  ngFontWeight="700"
}
