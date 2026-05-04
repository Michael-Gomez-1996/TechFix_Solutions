import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagen: string;
  stock: number;
  cantidad: number;
}

@Component({
  selector: 'app-venta-repuestos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './venta-repuestos.html',
  styleUrl: './venta-repuestos.css'
})
export class VentaRepuestos {
  
  productos: Producto[] = [
  // Procesadores
  { id: 1, nombre: 'Intel Core i5-12400F', categoria: 'Procesadores', descripcion: '6 núcleos, 12 hilos, hasta 4.4GHz', precio: 800000, imagen: 'intel-i5.webp', stock: 10, cantidad: 0 },
  { id: 2, nombre: 'Intel Core i7-13700K', categoria: 'Procesadores', descripcion: '16 núcleos, 24 hilos, hasta 5.4GHz', precio: 1600000, imagen: 'intel-i7.webp', stock: 5, cantidad: 0 },
  { id: 3, nombre: 'AMD Ryzen 5 5600X', categoria: 'Procesadores', descripcion: '6 núcleos, 12 hilos, hasta 4.6GHz', precio: 750000, imagen: 'amd-5600x.jpg', stock: 8, cantidad: 0 },
  { id: 4, nombre: 'AMD Ryzen 7 7800X3D', categoria: 'Procesadores', descripcion: '8 núcleos, 16 hilos, caché 3D', precio: 2100000, imagen: 'amd-7800x3d.jpg', stock: 3, cantidad: 0 },
  
  // Tarjetas Gráficas
  { id: 5, nombre: 'NVIDIA RTX 4060', categoria: 'Tarjetas Gráficas', descripcion: '8GB GDDR6, Ray Tracing', precio: 1400000, imagen: 'rtx-4060.jpg', stock: 7, cantidad: 0 },
  { id: 6, nombre: 'NVIDIA RTX 4070', categoria: 'Tarjetas Gráficas', descripcion: '12GB GDDR6X, DLSS 3', precio: 2200000, imagen: 'rtx-4070.webp', stock: 4, cantidad: 0 },
  { id: 7, nombre: 'AMD RX 7600 XT', categoria: 'Tarjetas Gráficas', descripcion: '16GB GDDR6', precio: 1300000, imagen: 'rx-7600xt.webp', stock: 6, cantidad: 0 },
  { id: 8, nombre: 'AMD RX 7800 XT', categoria: 'Tarjetas Gráficas', descripcion: '16GB GDDR6, 4K gaming', precio: 2400000, imagen: 'rx-7800xt.webp', stock: 2, cantidad: 0 },
  
  // Memorias RAM
  { id: 9, nombre: '16GB DDR4 3200MHz', categoria: 'Memorias RAM', descripcion: '2x8GB Dual Channel', precio: 250000, imagen: 'ddr4-16gb.webp', stock: 15, cantidad: 0 },
  { id: 10, nombre: '32GB DDR4 3600MHz', categoria: 'Memorias RAM', descripcion: '2x16GB RGB', precio: 480000, imagen: 'ddr4-32gb-rgb.webp', stock: 10, cantidad: 0 },
  { id: 11, nombre: '16GB DDR5 6000MHz', categoria: 'Memorias RAM', descripcion: '2x8GB Alta velocidad', precio: 450000, imagen: 'ddr5-16gb.jpg', stock: 8, cantidad: 0 },
  { id: 12, nombre: '32GB DDR5 6400MHz', categoria: 'Memorias RAM', descripcion: '2x16GB RGB', precio: 850000, imagen: 'ddr5-32gb-rgb.webp', stock: 5, cantidad: 0 },
  
  // Almacenamiento
  { id: 13, nombre: 'SSD 512GB NVMe', categoria: 'Almacenamiento', descripcion: 'Lectura 3500MB/s', precio: 180000, imagen: 'ssd-512gb.webp', stock: 20, cantidad: 0 },
  { id: 14, nombre: 'SSD 1TB NVMe', categoria: 'Almacenamiento', descripcion: 'Lectura 5000MB/s', precio: 320000, imagen: 'ssd-1tb.webp', stock: 12, cantidad: 0 },
  { id: 15, nombre: 'SSD 2TB NVMe', categoria: 'Almacenamiento', descripcion: 'Lectura 7000MB/s', precio: 580000, imagen: 'ssd-2tb.webp', stock: 6, cantidad: 0 },
  { id: 16, nombre: 'HDD 1TB', categoria: 'Almacenamiento', descripcion: 'Almacenamiento masivo', precio: 150000, imagen: 'hdd-1tb.jpg', stock: 15, cantidad: 0 },
  
  // Fuentes de Poder
  { id: 17, nombre: '650W 80 Plus Bronze', categoria: 'Fuentes de Poder', descripcion: 'Certificación eficiencia', precio: 280000, imagen: 'psu-650w.jpg', stock: 10, cantidad: 0 },
  { id: 18, nombre: '750W 80 Plus Gold', categoria: 'Fuentes de Poder', descripcion: 'Modular', precio: 450000, imagen: 'psu-750w-gold.jpg', stock: 7, cantidad: 0 },
  { id: 19, nombre: '850W 80 Plus Platinum', categoria: 'Fuentes de Poder', descripcion: 'Full modular', precio: 680000, imagen: 'psu-850w-platinum.png', stock: 4, cantidad: 0 },
  
  // Gabinetes
  { id: 20, nombre: 'Gabinete ATX Estándar', categoria: 'Gabinetes', descripcion: 'Vidrio templado', precio: 220000, imagen: 'case-atx.webp', stock: 8, cantidad: 0 },
  { id: 21, nombre: 'Gabinete Gamer RGB', categoria: 'Gabinetes', descripcion: 'ARGB, panel frontal mesh', precio: 380000, imagen: 'case-gamer-rgb.webp', stock: 5, cantidad: 0 },
  
  // Refrigeración
  { id: 22, nombre: 'Cooler básico', categoria: 'Refrigeración', descripcion: 'Disipador de aire', precio: 80000, imagen: 'cooler-air.webp', stock: 12, cantidad: 0 },
  { id: 23, nombre: 'Líquida 240mm', categoria: 'Refrigeración', descripcion: 'AIO doble radiador', precio: 450000, imagen: 'cooler-liquid-240.jpg', stock: 6, cantidad: 0 }
];
  categorias = ['Procesadores', 'Tarjetas Gráficas', 'Memorias RAM', 'Almacenamiento', 'Fuentes de Poder', 'Gabinetes', 'Refrigeración'];
  
  carrito: Producto[] = [];
  totalCarrito: number = 0;

  constructor(private router: Router) {
    this.cargarCarrito();
  }

  cargarCarrito(): void {
    const carritoGuardado = localStorage.getItem('carritoRepuestos');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
      this.actualizarTotal();
      this.sincronizarCantidades();
    }
  }

  guardarCarrito(): void {
    localStorage.setItem('carritoRepuestos', JSON.stringify(this.carrito));
  }

  sincronizarCantidades(): void {
    for (const item of this.carrito) {
      const producto = this.productos.find(p => p.id === item.id);
      if (producto) {
        producto.cantidad = item.cantidad;
      }
    }
  }

  actualizarTotal(): void {
    this.totalCarrito = this.carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  }

  agregarAlCarrito(producto: Producto): void {
    if (producto.cantidad >= producto.stock) {
      alert('No hay suficiente stock disponible');
      return;
    }
    
    const itemEnCarrito = this.carrito.find(p => p.id === producto.id);
    if (itemEnCarrito) {
      itemEnCarrito.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
    producto.cantidad++;
    this.actualizarTotal();
    this.guardarCarrito();
  }

  eliminarDelCarrito(producto: Producto): void {
    const index = this.carrito.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      const item = this.carrito[index];
      const productoOriginal = this.productos.find(p => p.id === item.id);
      if (productoOriginal) {
        productoOriginal.cantidad -= item.cantidad;
      }
      this.carrito.splice(index, 1);
      this.actualizarTotal();
      this.guardarCarrito();
    }
  }

  actualizarCantidad(item: Producto, nuevaCantidad: number): void {
    const producto = this.productos.find(p => p.id === item.id);
    if (producto && nuevaCantidad <= producto.stock && nuevaCantidad >= 0) {
      const diferencia = nuevaCantidad - item.cantidad;
      item.cantidad = nuevaCantidad;
      producto.cantidad += diferencia;
      if (item.cantidad === 0) {
        this.eliminarDelCarrito(item);
      } else {
        this.actualizarTotal();
        this.guardarCarrito();
      }
    } else if (nuevaCantidad > (producto?.stock || 0)) {
      alert('Stock insuficiente');
    }
  }

  obtenerCantidadEnCarrito(productoId: number): number {
    const item = this.carrito.find(p => p.id === productoId);
    return item ? item.cantidad : 0;
  }

  formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(precio);
  }

  irAlCarrito(): void {
    if (this.carrito.length === 0) {
      alert('⚠️ No hay productos en el carrito');
      return;
    }
    this.router.navigate(['/servicios/venta-repuestos/carrito'], { state: { carrito: this.carrito, total: this.totalCarrito } });
  }

  limpiarCarrito(): void {
    if (confirm('¿Estás seguro de vaciar el carrito?')) {
      for (const item of this.carrito) {
        const producto = this.productos.find(p => p.id === item.id);
        if (producto) producto.cantidad = 0;
      }
      this.carrito = [];
      this.actualizarTotal();
      this.guardarCarrito();
    }
  }

  getProductosPorCategoria(categoria: string): Producto[] {
    return this.productos.filter(p => p.categoria === categoria);
  }

  scrollToCategoria(categoria: string): void {
    const element = document.getElementById(categoria.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}