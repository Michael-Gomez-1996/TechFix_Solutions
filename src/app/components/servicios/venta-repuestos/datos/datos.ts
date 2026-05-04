import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface ProductoCarrito {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-datos-venta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './datos.html',
  styleUrl: './datos.css'
})
export class DatosVentaRepuestos implements OnInit {
  
  datosForm!: FormGroup;
  
  resumenData = {
    total: 0,
    cantidadProductos: 0
  };
  
  carrito: ProductoCarrito[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const navigation = window.history.state;
    console.log('Navigation state en datos venta:', navigation);
    
    if (navigation.carrito) {
      this.carrito = navigation.carrito;
      this.resumenData.total = navigation.total;
      this.resumenData.cantidadProductos = this.carrito.reduce((sum, item) => sum + item.cantidad, 0);
    } else {
      const carritoGuardado = localStorage.getItem('carritoRepuestos');
      if (carritoGuardado) {
        this.carrito = JSON.parse(carritoGuardado);
        this.resumenData.total = this.carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        this.resumenData.cantidadProductos = this.carrito.reduce((sum, item) => sum + item.cantidad, 0);
      }
    }

    this.datosForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      ciudad: ['', [Validators.required, Validators.minLength(3)]],
      codigoPostal: ['', [Validators.required, Validators.pattern('^[0-9]{5,6}$')]],
      notas: ['', [Validators.maxLength(500)]],
      fecha: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  get nombre() { return this.datosForm.get('nombre'); }
  get email() { return this.datosForm.get('email'); }
  get telefono() { return this.datosForm.get('telefono'); }
  get direccion() { return this.datosForm.get('direccion'); }
  get ciudad() { return this.datosForm.get('ciudad'); }
  get codigoPostal() { return this.datosForm.get('codigoPostal'); }
  get notas() { return this.datosForm.get('notas'); }
  get fecha() { return this.datosForm.get('fecha'); }
  get hora() { return this.datosForm.get('hora'); }

  formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(precio);
  }

  onSubmit(): void {
    if (this.datosForm.valid) {
      const datosCompletos = {
        ...this.datosForm.value,
        carrito: this.carrito,
        total: this.resumenData.total,
        cantidadProductos: this.resumenData.cantidadProductos
      };
      
      console.log('Datos del cliente venta:', datosCompletos);
      this.router.navigate(['/servicios/venta-repuestos/pago'], { state: datosCompletos });
    } else {
      alert('⚠️ Por favor, completa todos los campos requeridos correctamente.');
      this.datosForm.markAllAsTouched();
    }
  }
}