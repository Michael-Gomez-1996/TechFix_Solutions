import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoReparacion } from './pago';

describe('PagoReparacion', () => {
  let component: PagoReparacion;
  let fixture: ComponentFixture<PagoReparacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoReparacion],
    }).compileComponents();

    fixture = TestBed.createComponent(PagoReparacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
