import { Component } from '@angular/core';
// Importamos solo los componentes que se usan DENTRO de home.html
import { Hero } from './hero/hero';
import { Servicios } from './serviciosHome/servicios';
import { InfoFeatures } from './info-features/info-features';

@Component({
  selector: 'app-home',
  standalone: true,
  // Quitamos Header y Footer de la lista de imports
  imports: [Hero, Servicios, InfoFeatures], 
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
