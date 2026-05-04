import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface TipoEquipo {
  id: string;
  nombre: string;
  icono: string;
  descripcion: string;
  precio: number;
}

interface ServicioAdicional {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
  precio: number;
  seleccionado: boolean;
}

@Component({
  selector: 'app-configuracion-ensamble',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracion.html',
  styleUrl: './configuracion.css'
})
export class ConfiguracionEnsamble implements OnInit {
  
  tipoEquipoSeleccionado: string = 'pc-gamer';
  
  tiposEquipo: TipoEquipo[] = [
    { id: 'pc-gamer', nombre: 'PC Gamer', icono: '🎮', descripcion: 'Alto rendimiento para gaming', precio: 150000 },
    { id: 'pc-oficina', nombre: 'PC Oficina', icono: '💼', descripcion: 'Productividad y trabajo', precio: 80000 },
    { id: 'portatil-oficina', nombre: 'Portátil Oficina', icono: '💻', descripcion: 'Movilidad para trabajo', precio: 100000 },
    { id: 'portatil-personal', nombre: 'Portátil Personal', icono: '📱', descripcion: 'Uso diario y multimedia', precio: 90000 },
    { id: 'workstation', nombre: 'Workstation', icono: '🔬', descripcion: 'Diseño y edición profesional', precio: 250000 },
    { id: 'pc-basica', nombre: 'PC Básica', icono: '🖥️', descripcion: 'Navegación y tareas simples', precio: 50000 }
  ];

  serviciosAdicionales: ServicioAdicional[] = [
    { id: 1, nombre: 'Instalación de Windows + Drivers', descripcion: 'Sistema operativo listo para usar', icono: '🪟', precio: 120000, seleccionado: false },
    { id: 2, nombre: 'Instalación de Software Oficina', descripcion: 'Office, correo, antivirus', icono: '📊', precio: 80000, seleccionado: false },
    { id: 3, nombre: 'Instalación de Software Gamer', descripcion: 'Steam, Epic, Discord, etc', icono: '🎮', precio: 60000, seleccionado: false },
    { id: 4, nombre: 'Gestión de Cables Premium', descripcion: 'Organización estética interior', icono: '🔌', precio: 45000, seleccionado: false },
    { id: 5, nombre: 'RGB Personalizado', descripcion: 'Configuración de iluminación', icono: '🌈', precio: 35000, seleccionado: false },
    { id: 6, nombre: 'Overclocking', descripcion: 'Optimización de rendimiento', icono: '⚡', precio: 80000, seleccionado: false },
    { id: 7, nombre: 'Garantía Extendida 1 año', descripcion: 'Cobertura total', icono: '🛡️', precio: 100000, seleccionado: false }
  ];

  componentesPrevios: any[] = [];
  costoComponentesPrevios: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation && navigation.componentes) {
      this.componentesPrevios = navigation.componentes;
      this.costoComponentesPrevios = navigation.costoTotal || 0;
    }
  }

  get precioBase(): number {
    const equipo = this.tiposEquipo.find(e => e.id === this.tipoEquipoSeleccionado);
    return equipo?.precio || 0;
  }

  get costoServicios(): number {
    return this.serviciosAdicionales.filter(s => s.seleccionado).reduce((sum, s) => sum + s.precio, 0);
  }

  get totalGeneral(): number {
    return this.precioBase + this.costoComponentesPrevios + this.costoServicios;
  }

  formatearPrecio(precio: number): string {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(precio);
  }

  continuarADatos() {
    const datosConfiguracion = {
      equipo: this.tiposEquipo.find(e => e.id === this.tipoEquipoSeleccionado)?.nombre,
      servicios: this.serviciosAdicionales.filter(s => s.seleccionado).map(s => s.nombre),
      componentes: this.componentesPrevios,
      total: this.totalGeneral,
      precioBase: this.precioBase,
      costoServicios: this.costoServicios,
      costoComponentes: this.costoComponentesPrevios
    };
    this.router.navigate(['/servicios/ensamble-pc/datos'], { state: datosConfiguracion });
  }
}