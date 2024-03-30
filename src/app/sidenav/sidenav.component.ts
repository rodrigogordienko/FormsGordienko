import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {
  list = [
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-house',
    },
    {
      number: '2',
      name: 'Estadisticas',
      icon: 'fa-solid fa-chart-line',
    },
    {
      number: '3',
      name: 'Contactos',
      icon: 'fa-solid fa-phone',
    },
    {
      number: '4',
      name: 'Configuracion',
      icon: 'fa-solid fa-gear',
    },
  ]

  constructor(){

  }

  ngOnInit(): void{}
}
