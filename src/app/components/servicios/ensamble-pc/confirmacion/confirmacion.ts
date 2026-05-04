import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion-ensamble',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmacion.html',
  styleUrl: './confirmacion.css'
})
export class ConfirmacionEnsamble implements OnInit {
  
  datosConfirmacion = {
    nombre: '', email: '', telefono: '', direccion: '', descripcion: '',
    fecha: '', hora: '', equipo: 'PC Gamer',
    subtotal: 0, iva: 0, total: 0, metodoPago: 'tarjeta', tipo: 'ensamble'
  };
  
  numeroSolicitud: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation.total) {
      this.datosConfirmacion = {
        nombre: navigation.nombre || 'Cliente',
        email: navigation.email || '',
        telefono: navigation.telefono || '',
        direccion: navigation.direccion || '',
        descripcion: navigation.descripcion || '',
        fecha: navigation.fecha || this.formatearFecha(new Date()),
        hora: navigation.hora || this.formatearHora(new Date()),
        equipo: navigation.equipo || 'PC Gamer',
        subtotal: navigation.subtotal || navigation.total || 150000,
        iva: navigation.iva || 28500,
        total: navigation.total || 178500,
        metodoPago: navigation.metodoPago || 'tarjeta',
        tipo: 'ensamble'
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
    return `TF-E-${fecha.getFullYear()}${(fecha.getMonth() + 1).toString().padStart(2, '0')}${fecha.getDate().toString().padStart(2, '0')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  }
  
  formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(precio);
  }
  
  volverAlInicio(): void { this.router.navigate(['/']); }
  
  descargarComprobante(): void {
    const comprobante = `====================================
TECHFIX SOLUTIONS - ENSAMBLE DE PC
====================================
N° Solicitud: ${this.numeroSolicitud}
Fecha: ${this.datosConfirmacion.fecha}
Hora: ${this.datosConfirmacion.hora}
------------------------------------
DATOS DEL CLIENTE
Nombre: ${this.datosConfirmacion.nombre}
Email: ${this.datosConfirmacion.email}
Teléfono: ${this.datosConfirmacion.telefono}
Dirección: ${this.datosConfirmacion.direccion}
------------------------------------
DETALLE DEL SERVICIO
Tipo: Ensamble de PC
Equipo: ${this.datosConfirmacion.equipo}
Descripción: ${this.datosConfirmacion.descripcion || 'Sin detalles adicionales'}
------------------------------------
RESUMEN FINANCIERO
Subtotal: ${this.formatearPrecio(this.datosConfirmacion.subtotal)}
IVA (19%): ${this.formatearPrecio(this.datosConfirmacion.iva)}
TOTAL PAGADO: ${this.formatearPrecio(this.datosConfirmacion.total)}
------------------------------------
¡Gracias por confiar en TechFix Solutions!`;
    const blob = new Blob([comprobante], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `comprobante_ensamble_${this.numeroSolicitud}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}