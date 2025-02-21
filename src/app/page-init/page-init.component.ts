import { Component } from '@angular/core';
import { RouterModule, Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-page-init',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './page-init.component.html',
  styleUrl: './page-init.component.css'
})
export class PageInitComponent {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  irPagina(){
    console.log('tocoimagen');
    this.router.navigate(['proyecto']);
  }
  abrirEnlace() {
    window.open('https://www.google.com', '_blank'); // Abre en una nueva pestaña
  }
}
