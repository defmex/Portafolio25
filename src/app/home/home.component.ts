import { Component } from '@angular/core';
import { ProyectComponent } from "../proyect/proyect.component";
import { LanguangeCodingComponent } from "../languange-coding/languange-coding.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProyectComponent, LanguangeCodingComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
