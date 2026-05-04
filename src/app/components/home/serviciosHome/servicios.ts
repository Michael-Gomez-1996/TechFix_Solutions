import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Importar esto

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterLink], // 2. Agregarlo aquí para que funcione el HTML
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {}