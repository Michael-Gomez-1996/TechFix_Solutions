import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-reparacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pago.html',
  styleUrl: './pago.css'
})
export class PagoReparacion implements OnInit {
  
  pagoForm!: FormGroup;
  metodoPagoSeleccionado: string = 'tarjeta';
  
  resumenData = {
    equipo: 'Torre / Desktop',
    total: 0
  };
  
  subtotal: number = 350000;
  iva: number = 0;
  total: number = 0;
  readonly IVA_PORCENTAJE = 0.19;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation && navigation.total) {
      this.subtotal = navigation.total;
      this.resumenData.total = navigation.total;
      this.resumenData.equipo = navigation.equipo || 'Torre / Desktop';
    }
    
    this.calcularTotales();
    
    this.pagoForm = this.fb.group({
      metodoPago: ['tarjeta', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      nombreTarjeta: ['', [Validators.required, Validators.minLength(3)]],
      fechaExpiracion: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])/[0-9]{2}$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });
    
    this.pagoForm.get('metodoPago')?.valueChanges.subscribe(value => {
      this.metodoPagoSeleccionado = value;
      this.actualizarValidaciones(value);
    });
  }
  
  actualizarValidaciones(metodo: string): void {
    const campos = ['numeroTarjeta', 'nombreTarjeta', 'fechaExpiracion', 'cvv'];
    campos.forEach(campo => {
      const control = this.pagoForm.get(campo);
      if (metodo === 'tarjeta') {
        control?.setValidators([Validators.required, campo === 'numeroTarjeta' ? Validators.pattern('^[0-9]{16}$') : 
                                campo === 'cvv' ? Validators.pattern('^[0-9]{3,4}$') :
                                campo === 'fechaExpiracion' ? Validators.pattern('^(0[1-9]|1[0-2])/[0-9]{2}$') :
                                Validators.minLength(3)]);
      } else {
        control?.clearValidators();
      }
      control?.updateValueAndValidity();
    });
  }
  
  calcularTotales(): void {
    this.iva = this.subtotal * this.IVA_PORCENTAJE;
    this.total = this.subtotal + this.iva;
  }
  
  formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(precio);
  }
  
  seleccionarMetodoPago(metodo: string): void {
    this.metodoPagoSeleccionado = metodo;
    this.pagoForm.patchValue({ metodoPago: metodo });
  }
  
  formatearNumeroTarjeta(event: any): void {
    let value = event.target.value.replace(/\s/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    let formatted = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) formatted += ' ';
      formatted += value[i];
    }
    this.pagoForm.patchValue({ numeroTarjeta: value });
    event.target.value = formatted;
  }
  
  onSubmit(): void {
    if (this.pagoForm.valid) {
      const datosCompletos = { ...this.pagoForm.value, subtotal: this.subtotal, iva: this.iva, total: this.total, equipo: this.resumenData.equipo };
      this.router.navigate(['/servicios/reparacion-tecnica/confirmacion'], { state: datosCompletos });
    } else {
      alert('⚠️ Por favor, completa todos los campos correctamente.');
      this.pagoForm.markAllAsTouched();
    }
  }
}