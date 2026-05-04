import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosReparacion } from './datos';

describe('DatosReparacion', () => {
  let component: DatosReparacion;
  let fixture: ComponentFixture<DatosReparacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosReparacion],
    }).compileComponents();

    fixture = TestBed.createComponent(DatosReparacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
