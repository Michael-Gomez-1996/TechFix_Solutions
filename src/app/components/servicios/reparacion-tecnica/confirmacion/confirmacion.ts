import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion-reparacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmacion.html',
  styleUrl: './confirmacion.css'
})
export class ConfirmacionReparacion implements OnInit {
  
  datosConfirmacion = {
    nombre: '', email: '', telefono: '', direccion: '', descripcion: '',
    fecha: '', hora: '', equipo: 'Torre / Desktop',
    subtotal: 0, iva: 0, total: 0, metodoPago: 'tarjeta'
  };
  
  numeroSolicitud: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation && navigation.total) {
      this.datosConfirmacion = {
        nombre: navigation.nombre || 'Cliente',
        email: navigation.email || '',
        telefono: navigation.telefono || '',
        direccion: navigation.direccion || '',
        descripcion: navigation.descripcion || '',
        fecha: navigation.fecha || this.formatearFecha(new Date()),
        hora: navigation.hora || this.formatearHora(new Date()),
        equipo: navigation.equipo || 'Torre / Desktop',
        subtotal: navigation.subtotal || navigation.total || 350000,
        iva: navigation.iva || 66500,
        total: navigation.total || 416500,
        metodoPago: navigation.metodoPago || 'tarjeta'
      };
    }
    this.numeroSolicitud = this.generarNumeroSolicitud();
  }
  
  formatearFecha(fecha: Date): string {
    return `${fecha.getDate().toString().padStart(2, '0')}/${(fecha.getMonth() + 1).toString().padStart(2, '0')}/${fecha.getFullYear()}`;
  }
  
  formatearHora(fecha: Date): string {
    return `${fecha.getHours().toString().padStart(2, '0')}:${fecha.getMinutes().toString().padStart(2, '0')}`;
  }
  
  generarNumeroSolicitud(): string {
    const fecha = new Date();
    return `TF-R-${fecha.getFullYear()}${(fecha.getMonth() + 1).toString().padStart(2, '0')}${fecha.getDate().toString().padStart(2, '0')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  }
  
  formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(precio);
  }
  
  volverAlInicio(): void { this.router.navigate(['/']); }
  
  descargarComprobante(): void {
    const comprobante = `TECHFIX SOLUTIONS - REPARACIÓN TÉCNICA
N° Solicitud: ${this.numeroSolicitud}
Fecha: ${this.datosConfirmacion.fecha} Hora: ${this.datosConfirmacion.hora}
Cliente: ${this.datosConfirmacion.nombre}
Equipo: ${this.datosConfirmacion.equipo}
Total: ${this.formatearPrecio(this.datosConfirmacion.total)}`;
    const blob = new Blob([comprobante], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `comprobante_${this.numeroSolicitud}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}