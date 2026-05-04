import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ConfirmacionLimpieza } from './confirmacion';

describe('ConfirmacionLimpieza', () => {
  let component: ConfirmacionLimpieza;
  let fixture: ComponentFixture<ConfirmacionLimpieza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionLimpieza, RouterTestingModule],
    }).compileComponents();

    // Mock window.history.state
    Object.defineProperty(window.history, 'state', {
      value: {
        total: 250000,
        serviciosRealizados: [],
        nombre: 'Cliente',
        email: '',
        telefono: '',
        direccion: '',
        descripcion: '',
        fecha: '2026-05-04',
        hora: '10:00',
        equipo: 'Torre / Desktop',
        nivelSuciedad: 'Bajo',
        subtotal: 250000,
        iva: 47500
      },
      writable: true
    });

    fixture = TestBed.createComponent(ConfirmacionLimpieza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
