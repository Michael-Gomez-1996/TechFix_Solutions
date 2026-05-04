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
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito implements OnInit {
  
  carrito: ProductoCarrito[] = [];
  total: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation.carrito) {
      this.carrito = navigation.carrito;
      this.total = navigation.total;
    } else {
      const carritoGuardado = localStorage.getItem('carritoRepuestos');
      if (carritoGuardado) {
        this.carrito = JSON.parse(carritoGuardado);
        this.calcularTotal();
      }
    }
  }

  calcularTotal(): void {
    this.total = this.carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  }

  actualizarCantidad(item: ProductoCarrito, nuevaCantidad: number): void {
    if (nuevaCantidad <= 0) {
      this.eliminarProducto(item);
    } else {
      item.cantidad = nuevaCantidad;
      this.calcularTotal();
      this.guardarCarrito();
    }
  }

  eliminarProducto(item: ProductoCarrito): void {
    const index = this.carrito.indexOf(item);
    if (index !== -1) {
      this.carrito.splice(index, 1);
      this.calcularTotal();
      this.guardarCarrito();
    }
  }

  guardarCarrito(): void {
    localStorage.setItem('carritoRepuestos', JSON.stringify(this.carrito));
  }

  formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(precio);
  }

  continuarADatos(): void {
    if (this.carrito.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    this.router.navigate(['/servicios/venta-repuestos/datos'], { state: { carrito: this.carrito, total: this.total } });
  }

  seguirComprando(): void {
    this.router.navigate(['/servicios/venta-repuestos']);
  }
}