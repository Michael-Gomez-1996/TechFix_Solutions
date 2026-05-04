import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface ProductoCarrito {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-confirmacion-venta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmacion.html',
  styleUrl: './confirmacion.css'
})
export class ConfirmacionVentaRepuestos implements OnInit {
  
  datosConfirmacion = {
    nombre: '', email: '', telefono: '', direccion: '', ciudad: '', codigoPostal: '',
    fecha: '', hora: '', notas: '',
    subtotal: 0, iva: 0, total: 0, metodoPago: 'tarjeta',
    cantidadProductos: 0
  };
  
  carrito: ProductoCarrito[] = [];
  numeroSolicitud: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = window.history.state;
    console.log('Navigation state en confirmacion venta:', navigation);
    
    if (navigation.total) {
      this.datosConfirmacion = {
        nombre: navigation.nombre || 'Cliente',
        email: navigation.email || '',
        telefono: navigation.telefono || '',
        direccion: navigation.direccion || '',
        ciudad: navigation.ciudad || '',
        codigoPostal: navigation.codigoPostal || '',
        notas: navigation.notas || '',
        fecha: navigation.fecha || this.formatearFecha(new Date()),
        hora: navigation.hora || this.formatearHora(new Date()),
        subtotal: navigation.subtotal || navigation.total || 0,
        iva: navigation.iva || 0,
        total: navigation.total || 0,
        metodoPago: navigation.metodoPago || 'tarjeta',
        cantidadProductos: navigation.cantidadProductos || 0
      };
      this.carrito = navigation.carrito || [];
    }
    this.numeroSolicitud = this.generarNumeroSolicitud();
    this.limpiarCarritoStorage();
  }
  
  limpiarCarritoStorage(): void {
    localStorage.removeItem('carritoRepuestos');
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
  
  volverAlInicio(): void { 
    this.router.navigate(['/']); 
  }
  
  descargarComprobante(): void {
    let productosTexto = '';
    for (const item of this.carrito) {
      productosTexto += `  - ${item.nombre} x${item.cantidad} = ${this.formatearPrecio(item.precio * item.cantidad)}\n`;
    }
    
    const comprobante = `====================================
TECHFIX SOLUTIONS - VENTA DE REPUESTOS
====================================
N° Pedido: ${this.numeroSolicitud}
Fecha: ${this.datosConfirmacion.fecha}
Hora: ${this.datosConfirmacion.hora}
------------------------------------
DATOS DEL CLIENTE
Nombre: ${this.datosConfirmacion.nombre}
Email: ${this.datosConfirmacion.email}
Teléfono: ${this.datosConfirmacion.telefono}
Dirección: ${this.datosConfirmacion.direccion}
Ciudad: ${this.datosConfirmacion.ciudad}
Código Postal: ${this.datosConfirmacion.codigoPostal}
------------------------------------
PRODUCTOS
${productosTexto}
------------------------------------
RESUMEN FINANCIERO
Subtotal: ${this.formatearPrecio(this.datosConfirmacion.subtotal)}
IVA (19%): ${this.formatearPrecio(this.datosConfirmacion.iva)}
Envío: Gratis
TOTAL PAGADO: ${this.formatearPrecio(this.datosConfirmacion.total)}
------------------------------------
Método de pago: ${this.datosConfirmacion.metodoPago === 'tarjeta' ? 'Tarjeta' : this.datosConfirmacion.metodoPago === 'transferencia' ? 'Transferencia' : 'Contraentrega'}
------------------------------------
¡Gracias por comprar en TechFix Solutions!`;
    const blob = new Blob([comprobante], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `comprobante_venta_${this.numeroSolicitud}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}