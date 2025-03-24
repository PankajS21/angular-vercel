import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-props',
  imports: [],
  templateUrl: './props.component.html',
  styleUrl: './props.component.css'
})
export class PropsComponent {
  @Input() name:string = '';
  @Input() course:string='';
  @Input() users:string=''
}
