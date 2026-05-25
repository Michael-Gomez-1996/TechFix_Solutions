import { Injectable } from '@angular/core';

// Interfaz que modela las propiedades esenciales de cada componente de hardware
export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: 'componentes' | 'almacenamiento' | 'refrigeracion' | 'perifericos';
  stock: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // "Base de datos" simulada con el inventario inicial de repuestos y partes
  private listaProductos: Producto[] = [
    {
      id: 1,
      nombre: 'Memoria RAM DDR4 16GB Kingston Fury',
      descripcion: 'Memoria de alto rendimiento a 3200MHz, ideal para multitarea, diseño y optimización de sistemas.',
      precio: 185000,
      categoria: 'componentes',
      stock: 8,
      imagen: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=500'
    },
    {
      id: 2,
      nombre: 'Disco Estado Sólido SSD NVMe M.2 1TB Crucial',
      descripcion: 'Almacenamiento masivo ultra rápido con velocidades de lectura de hasta 3500 MB/s para encendidos instantáneos.',
      precio: 290000,
      categoria: 'almacenamiento',
      stock: 12,
      imagen: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500'
    },
    {
      id: 3,
      nombre: 'Refrigeración Líquida Cooler Master 240mm',
      descripcion: 'Sistema de enfriamiento hidráulico de doble ventilador ARGB, esencial para prevenir sobrecalentamientos.',
      precio: 340000,
      categoria: 'refrigeracion',
      stock: 3,
      imagen: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500'
    },
    {
      id: 4,
      nombre: 'Pasta Térmica Arctic MX-4 (4g)',
      descripcion: 'Compuesto térmico de alta conductividad para procesadores y tarjetas gráficas de laptops y torres.',
      precio: 35000,
      categoria: 'componentes',
      stock: 25,
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_863357-MLA99913263453_112025-O.webp'
    },
    {
      id: 5,
      nombre: 'Mouse Gamer Logitech G502 Hero',
      descripcion: 'Periférico ergonómico de alta precisión con sensor HERO 25K y 11 botones mecánicos configurables.',
      precio: 210000,
      categoria: 'perifericos',
      stock: 6,
      imagen: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500'
    }
  ];

  constructor() {}

  // Método para retornar todos los repuestos del catálogo
  getProductos(): Producto[] {
    return [...this.listaProductos];
  }

  // Método para buscar un componente específico mediante su ID
  getProductoPorId(id: number): Producto | undefined {
    return this.listaProductos.find(p => p.id === id);
  }
}