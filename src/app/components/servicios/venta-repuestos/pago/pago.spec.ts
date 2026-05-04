import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PagoVentaRepuestos } from './pago';

describe('PagoVentaRepuestos', () => {
  let component: PagoVentaRepuestos;
  let fixture: ComponentFixture<PagoVentaRepuestos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoVentaRepuestos, RouterTestingModule],
    }).compileComponents();

    // Mock window.history.state
    Object.defineProperty(window.history, 'state', {
      value: {
        total: 0,
        subtotal: 0,
        iva: 0,
        productos: 0
      },
      writable: true
    });

    fixture = TestBed.createComponent(PagoVentaRepuestos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
