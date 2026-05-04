import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ConfirmacionEnsamble } from './confirmacion';

describe('ConfirmacionEnsamble', () => {
  let component: ConfirmacionEnsamble;
  let fixture: ComponentFixture<ConfirmacionEnsamble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionEnsamble, RouterTestingModule],
    }).compileComponents();

    // Mock window.history.state
    Object.defineProperty(window.history, 'state', {
      value: {
        total: 178500,
        nombre: 'Cliente',
        email: '',
        telefono: '',
        direccion: '',
        descripcion: '',
        fecha: '2026-05-04',
        hora: '10:00',
        equipo: 'PC Gamer',
        subtotal: 150000,
        iva: 28500,
        metodoPago: 'tarjeta',
        tipo: 'ensamble'
      },
      writable: true
    });

    fixture = TestBed.createComponent(ConfirmacionEnsamble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
