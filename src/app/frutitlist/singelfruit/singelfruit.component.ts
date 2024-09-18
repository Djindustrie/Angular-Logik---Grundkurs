import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singelfruit',
  standalone: true,
  imports: [],
  templateUrl: './singelfruit.component.html',
  styleUrl: './singelfruit.component.scss'
})
export class SingelfruitComponent {
@Input() fruitnumber = 0;
}
