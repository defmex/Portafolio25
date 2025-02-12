import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyect',
  standalone: true,
  imports: [],
  templateUrl: './proyect.component.html',
  styleUrl: './proyect.component.css'
})
export class ProyectComponent {
  @Input() img!: string;
  @Input() imgAlt!: string;
  @Input() description!: string;
  @Input() title!: string;
  @Input() url!: string;
}
