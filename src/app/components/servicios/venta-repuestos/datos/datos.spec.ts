import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DatosVentaRepuestos } from './datos';

describe('DatosVentaRepuestos', () => {
  let component: DatosVentaRepuestos;
  let fixture: ComponentFixture<DatosVentaRepuestos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosVentaRepuestos, RouterTestingModule],
    }).compileComponents();

    // Mock window.history.state
    Object.defineProperty(window.history, 'state', {
      value: {
        carrito: [],
        total: 0
      },
      writable: true
    });

    fixture = TestBed.createComponent(DatosVentaRepuestos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
