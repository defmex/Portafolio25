import { Component } from '@angular/core';
import { ProyectComponent } from "../proyect/proyect.component";
import { LanguangeCodingComponent } from "../languange-coding/languange-coding.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProyectComponent, LanguangeCodingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
