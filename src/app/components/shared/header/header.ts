import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  mostrarMenuServicios: boolean = false;

  toggleMenuServicios() {
    this.mostrarMenuServicios = !this.mostrarMenuServicios;
  }

  cerrarMenu() {
    this.mostrarMenuServicios = false;
  }

  servicios = [
    { nombre: 'Limpieza Profunda', ruta: '/servicios/limpieza-profunda', icono: '🧹' },
    { nombre: 'Reparación Técnica', ruta: '/servicios/reparacion-tecnica', icono: '🔧' },
    { nombre: 'Ensamble de PC', ruta: '/servicios/ensamble-pc', icono: '🖥️' },
    { nombre: 'Venta de Repuestos', ruta: '/servicios/venta-repuestos', icono: '🛒' }
  ];
}