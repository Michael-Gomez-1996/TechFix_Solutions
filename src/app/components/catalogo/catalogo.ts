import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductosService, Producto } from '../../services/productos/productos';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo implements OnInit {
  // Inyección del servicio transversal de hardware usando inject()
  private productosService = inject(ProductosService);

  // Arreglos para almacenar los datos originales y los datos filtrados en pantalla
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  
  // Categoría seleccionada por defecto para la botonera
  categoriaSeleccionada: string = 'todos';

  ngOnInit(): void {
    // Al iniciar el componente, consumimos los datos del servicio tal como en el taller
    this.productos = this.productosService.getProductos();
    this.productosFiltrados = this.productos;
  }

  // Método de filtrado dinámico según la categoría seleccionada
  filtrarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    
    if (categoria === 'todos') {
      this.productosFiltrados = this.productos;
    } else {
      this.productosFiltrados = this.productos.filter(
        (p) => p.categoria === categoria
      );
    }
  }

  // Método para interactuar temporalmente con la consola al seleccionar un producto
  solicitarRepuesto(producto: Producto): void {
    console.log('Componente seleccionado para el flujo de TechFix:', producto.nombre);
  }
}