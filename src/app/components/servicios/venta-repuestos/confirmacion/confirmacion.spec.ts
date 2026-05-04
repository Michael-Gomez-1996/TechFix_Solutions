import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ConfirmacionVentaRepuestos } from './confirmacion';

describe('ConfirmacionVentaRepuestos', () => {
  let component: ConfirmacionVentaRepuestos;
  let fixture: ComponentFixture<ConfirmacionVentaRepuestos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionVentaRepuestos, RouterTestingModule],
    }).compileComponents();

    // Mock window.history.state
    Object.defineProperty(window.history, 'state', {
      value: {
        total: 0,
        subtotal: 0,
        iva: 0,
        productos: 0,
        nombre: 'Cliente',
        numeroTarjeta: '****'
      },
      writable: true
    });

    fixture = TestBed.createComponent(ConfirmacionVentaRepuestos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
