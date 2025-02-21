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
    this.router.navigate(['proyecto']);
  }
}
