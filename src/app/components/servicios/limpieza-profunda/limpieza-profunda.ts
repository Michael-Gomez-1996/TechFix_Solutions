import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-limpieza-profunda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './limpieza-profunda.html',
  styleUrl: './limpieza-profunda.css',
})
export class LimpiezaProfunda {
  tiempoTotalMinutos: number = 30;

  constructor(private router: Router) {}

  actualizarTiempo(evento: any) {
    const incremento = 30;
    if (evento.target.checked) {
      this.tiempoTotalMinutos += incremento;
    } else {
      this.tiempoTotalMinutos -= incremento;
    }
  }

  calcularHoras(): string {
    if (this.tiempoTotalMinutos <= 0) {
      return '0';
    }
    const horas = this.tiempoTotalMinutos / 60;
    return horas % 1 === 0 ? horas.toString() : horas.toFixed(1);
  }

  procesarOpciones() {
    this.router.navigate(['/servicios/limpieza-profunda/configuracion']);
  }
}