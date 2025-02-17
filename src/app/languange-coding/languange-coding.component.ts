import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-languange-coding',
  standalone: true,
  imports: [],
  templateUrl: './languange-coding.component.html',
  styleUrl: './languange-coding.component.css'
})
export class LanguangeCodingComponent {
  @Input() img!: string;
  @Input() imgAlt!: string;
  @Input() name!: string;
}
