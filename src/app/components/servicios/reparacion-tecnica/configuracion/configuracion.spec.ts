import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionReparacion } from './configuracion';

describe('ConfiguracionReparacion', () => {
  let component: ConfiguracionReparacion;
  let fixture: ComponentFixture<ConfiguracionReparacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionReparacion],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionReparacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
