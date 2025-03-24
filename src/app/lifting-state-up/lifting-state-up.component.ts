import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lifting-state-up',
  imports: [],
  templateUrl: './lifting-state-up.component.html',
  styleUrl: './lifting-state-up.component.css'
})
export class LiftingStateUpComponent {
  @Output() sendData = new EventEmitter();
  data = ['Suraj', 'Honey', 'Saurabh', 'Rahul', 'Sandeep'];

  ngOnInit() {
    this.sendData.emit(this.data);
  }
}
