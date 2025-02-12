import { Component } from '@angular/core';
import { ProyectComponent } from "../proyect/proyect.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProyectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
