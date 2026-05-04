import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-ensamble',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './datos.html',
  styleUrl: './datos.css'
})
export class DatosEnsamble implements OnInit {
  
  datosForm!: FormGroup;
  
  resumenData = {
    equipo: 'PC Gamer',
    total: 0,
    componentes: 0,
    servicios: 0
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation.total) {
      this.resumenData.total = navigation.total;
      this.resumenData.equipo = navigation.equipo || 'PC Gamer';
      this.resumenData.componentes = navigation.componentes?.length || 0;
      this.resumenData.servicios = navigation.servicios?.length || 0;
    } else {
      this.resumenData.total = 150000;
    }

    this.datosForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.maxLength(500)]],
      fecha: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  get nombre() { return this.datosForm.get('nombre'); }
  get email() { return this.datosForm.get('email'); }
  get telefono() { return this.datosForm.get('telefono'); }
  get direccion() { return this.datosForm.get('direccion'); }
  get descripcion() { return this.datosForm.get('descripcion'); }
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
        total: this.resumenData.total,
        equipo: this.resumenData.equipo,
        tipo: 'ensamble'
      };
      console.log('Datos del cliente ensamble:', datosCompletos);
      this.router.navigate(['/servicios/ensamble-pc/pago'], { state: datosCompletos });
    } else {
      alert('⚠️ Por favor, completa todos los campos requeridos correctamente.');
      this.datosForm.markAllAsTouched();
    }
  }
}