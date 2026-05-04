import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaRepuestos } from './venta-repuestos';

describe('VentaRepuestos', () => {
  let component: VentaRepuestos;
  let fixture: ComponentFixture<VentaRepuestos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentaRepuestos],
    }).compileComponents();

    fixture = TestBed.createComponent(VentaRepuestos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
