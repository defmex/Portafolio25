import { Component } from '@angular/core';
import { ProyectComponent } from "../proyect/proyect.component";
import { LanguangeCodingComponent } from "../languange-coding/languange-coding.component";
import { PageInitComponent } from "../page-init/page-init.component";
import { RouterModule, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProyectComponent, LanguangeCodingComponent, PageInitComponent,  RouterModule, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  irPagina(){
    this.router.navigate(['proyecto']);
  }
}
