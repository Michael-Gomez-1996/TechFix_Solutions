import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface ItemEnsamble {
  nombre: string;
  descripcion: string;
  categoria: string;
  checked: boolean;
  selected: boolean;
  precio: number;
}

@Component({
  selector: 'app-ensamble-pc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ensamble-pc.html',
  styleUrl: './ensamble-pc.css'
})
export class EnsamblePc {
  
  tiempoTotalMinutos: number = 0;
  costoTotalComponentes: number = 0;
  
  itemsEnsamble: ItemEnsamble[] = [
    // Procesadores
    { nombre: 'Intel Core i5 12400F', descripcion: '6 núcleos, 12 hilos, hasta 4.4GHz', categoria: 'Procesador', checked: false, selected: false, precio: 800000 },
    { nombre: 'Intel Core i7 13700K', descripcion: '16 núcleos, 24 hilos, hasta 5.4GHz', categoria: 'Procesador', checked: false, selected: false, precio: 1600000 },
    { nombre: 'AMD Ryzen 5 5600X', descripcion: '6 núcleos, 12 hilos, hasta 4.6GHz', categoria: 'Procesador', checked: false, selected: false, precio: 750000 },
    { nombre: 'AMD Ryzen 7 7800X3D', descripcion: '8 núcleos, 16 hilos, caché 3D', categoria: 'Procesador', checked: false, selected: false, precio: 2100000 },
    
    // Tarjetas Gráficas
    { nombre: 'NVIDIA RTX 4060', descripcion: '8GB GDDR6, Ray Tracing', categoria: 'Tarjeta Gráfica', checked: false, selected: false, precio: 1400000 },
    { nombre: 'NVIDIA RTX 4070', descripcion: '12GB GDDR6X, DLSS 3', categoria: 'Tarjeta Gráfica', checked: false, selected: false, precio: 2200000 },
    { nombre: 'AMD RX 7600 XT', descripcion: '16GB GDDR6, Rendimiento excepcional', categoria: 'Tarjeta Gráfica', checked: false, selected: false, precio: 1300000 },
    { nombre: 'AMD RX 7800 XT', descripcion: '16GB GDDR6, 4K gaming', categoria: 'Tarjeta Gráfica', checked: false, selected: false, precio: 2400000 },
    
    // Memorias RAM
    { nombre: '16GB DDR4 3200MHz', descripcion: '2x8GB Dual Channel', categoria: 'Memoria RAM', checked: false, selected: false, precio: 250000 },
    { nombre: '32GB DDR4 3600MHz', descripcion: '2x16GB RGB', categoria: 'Memoria RAM', checked: false, selected: false, precio: 480000 },
    { nombre: '16GB DDR5 6000MHz', descripcion: '2x8GB Alta velocidad', categoria: 'Memoria RAM', checked: false, selected: false, precio: 450000 },
    { nombre: '32GB DDR5 6400MHz', descripcion: '2x16GB RGB', categoria: 'Memoria RAM', checked: false, selected: false, precio: 850000 },
    
    // Almacenamiento
    { nombre: 'SSD 512GB NVMe', descripcion: 'Lectura 3500MB/s', categoria: 'Almacenamiento', checked: false, selected: false, precio: 180000 },
    { nombre: 'SSD 1TB NVMe', descripcion: 'Lectura 5000MB/s', categoria: 'Almacenamiento', checked: false, selected: false, precio: 320000 },
    { nombre: 'SSD 2TB NVMe', descripcion: 'Lectura 7000MB/s', categoria: 'Almacenamiento', checked: false, selected: false, precio: 580000 },
    { nombre: 'HDD 1TB + SSD 256GB', descripcion: 'Combo almacenamiento híbrido', categoria: 'Almacenamiento', checked: false, selected: false, precio: 250000 },
    
    // Fuentes de Poder
    { nombre: '650W 80 Plus Bronze', descripcion: 'Certificación eficiencia', categoria: 'Fuente de Poder', checked: false, selected: false, precio: 280000 },
    { nombre: '750W 80 Plus Gold', descripcion: 'Modular, alta eficiencia', categoria: 'Fuente de Poder', checked: false, selected: false, precio: 450000 },
    { nombre: '850W 80 Plus Platinum', descripcion: 'Full modular', categoria: 'Fuente de Poder', checked: false, selected: false, precio: 680000 },
    
    // Gabinetes
    { nombre: 'Gabinete ATX Estándar', descripcion: 'Vidrio templado, 3 ventiladores', categoria: 'Gabinete', checked: false, selected: false, precio: 220000 },
    { nombre: 'Gabinete Gamer RGB', descripcion: 'ARGB, panel frontal mesh', categoria: 'Gabinete', checked: false, selected: false, precio: 380000 },
    { nombre: 'Gabinete Premium', descripcion: 'Alta calidad, 6 ventiladores', categoria: 'Gabinete', checked: false, selected: false, precio: 550000 },
    
    // Refrigeración
    { nombre: 'Cooler básico', descripcion: 'Disipador de aire estándar', categoria: 'Refrigeración', checked: false, selected: false, precio: 80000 },
    { nombre: 'Líquida 120mm', descripcion: 'AIO refrigeración líquida', categoria: 'Refrigeración', checked: false, selected: false, precio: 280000 },
    { nombre: 'Líquida 240mm', descripcion: 'AIO doble radiador', categoria: 'Refrigeración', checked: false, selected: false, precio: 450000 }
  ];

  constructor(private router: Router) {}

  actualizarSeleccion(evento: any, item: ItemEnsamble) {
    const tiempoIncremento = 45;
    item.checked = evento.target.checked;
    item.selected = evento.target.checked;
    
    if (evento.target.checked) {
      this.tiempoTotalMinutos += tiempoIncremento;
      this.costoTotalComponentes += item.precio;
    } else {
      this.tiempoTotalMinutos -= tiempoIncremento;
      this.costoTotalComponentes -= item.precio;
    }
  }

  calcularHoras(): string {
    if (this.tiempoTotalMinutos <= 0) return '0';
    const horas = this.tiempoTotalMinutos / 60;
    return horas === 1 ? '1 hora' : horas % 1 === 0 ? `${horas} horas` : `${horas.toFixed(1)} horas`;
  }

  formatearTiempo(): string {
    if (this.tiempoTotalMinutos === 0) return '0 horas';
    if (this.tiempoTotalMinutos < 60) return `${this.tiempoTotalMinutos} minutos`;
    return this.calcularHoras();
  }

  formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(precio);
  }

  configurarOpciones() {
    const datosSeleccionados = {
      componentes: this.itemsEnsamble.filter(i => i.checked).map(i => ({ nombre: i.nombre, precio: i.precio })),
      tiempoTotal: this.tiempoTotalMinutos,
      costoTotal: this.costoTotalComponentes
    };
    this.router.navigate(['/servicios/ensamble-pc/configuracion'], { state: datosSeleccionados });
  }

  getComponentesPorCategoria(categoria: string): ItemEnsamble[] {
    return this.itemsEnsamble.filter(i => i.categoria === categoria);
  }
}