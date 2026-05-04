import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface ItemDiagnostico {
  nombre: string;
  descripcion: string;
  checked: boolean;
  selected: boolean;
}

interface ItemPieza {
  nombre: string;
  descripcion: string;
  checked: boolean;
  selected: boolean;
}

@Component({
  selector: 'app-reparacion-tecnica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reparacion-tecnica.html',
  styleUrl: './reparacion-tecnica.css'
})
export class ReparacionTecnica {
  
  tiempoTotalMinutos: number = 0;
  
  itemsDiagnostico: ItemDiagnostico[] = [
    { nombre: 'Diagnóstico del Sistema', descripcion: 'Análisis completo de software y drivers', checked: false, selected: false },
    { nombre: 'Pruebas de Estrés', descripcion: 'Evaluación de rendimiento bajo carga máxima', checked: false, selected: false },
    { nombre: 'Análisis de Temperaturas', descripcion: 'Monitoreo de temperaturas de CPU y GPU', checked: false, selected: false },
    { nombre: 'Diagnóstico de Memoria RAM', descripcion: 'Prueba de estabilidad y errores de memoria', checked: false, selected: false },
    { nombre: 'Verificación de Discos Duros', descripcion: 'Análisis de sectores dañados y SMART', checked: false, selected: false }
  ];
  
  itemsPiezas: ItemPieza[] = [
    { nombre: 'Fuente de Poder', descripcion: 'Reemplazo y prueba de voltajes', checked: false, selected: false },
    { nombre: 'Disco Duro / SSD', descripcion: 'Instalación y migración de datos', checked: false, selected: false },
    { nombre: 'Memoria RAM', descripcion: 'Instalación y verificación de compatibilidad', checked: false, selected: false },
    { nombre: 'Tarjeta Gráfica', descripcion: 'Instalación y configuración de drivers', checked: false, selected: false },
    { nombre: 'Ventiladores / Disipadores', descripcion: 'Reemplazo y optimización de flujo de aire', checked: false, selected: false },
    { nombre: 'Placa Madre', descripcion: 'Diagnóstico y posible reemplazo', checked: false, selected: false }
  ];

  constructor(private router: Router) {}

  actualizarTiempoDiagnostico(evento: any, item: ItemDiagnostico) {
    const incremento = 30;
    item.checked = evento.target.checked;
    item.selected = evento.target.checked;
    if (evento.target.checked) {
      this.tiempoTotalMinutos += incremento;
    } else {
      this.tiempoTotalMinutos -= incremento;
    }
  }

  actualizarTiempoPieza(evento: any, item: ItemPieza) {
    const incremento = 45;
    item.checked = evento.target.checked;
    item.selected = evento.target.checked;
    if (evento.target.checked) {
      this.tiempoTotalMinutos += incremento;
    } else {
      this.tiempoTotalMinutos -= incremento;
    }
  }

  calcularHoras(): string {
    if (this.tiempoTotalMinutos <= 0) return '0';
    const horas = this.tiempoTotalMinutos / 60;
    if (horas === 1) return '1 hora';
    if (horas % 1 === 0) return `${horas} horas`;
    return `${horas.toFixed(1)} horas`;
  }

  formatearTiempoParaMostrar(): string {
    if (this.tiempoTotalMinutos === 0) return '0 horas';
    if (this.tiempoTotalMinutos === 30) return '30 minutos';
    if (this.tiempoTotalMinutos === 45) return '45 minutos';
    if (this.tiempoTotalMinutos < 60) return `${this.tiempoTotalMinutos} minutos`;
    return this.calcularHoras();
  }

  configurarOpciones() {
    const datosSeleccionados = {
      diagnosticos: this.itemsDiagnostico.filter(i => i.checked).map(i => i.nombre),
      piezas: this.itemsPiezas.filter(i => i.checked).map(i => i.nombre),
      tiempoTotal: this.tiempoTotalMinutos
    };
    this.router.navigate(['/servicios/reparacion-tecnica/configuracion'], { state: datosSeleccionados });
  }
}