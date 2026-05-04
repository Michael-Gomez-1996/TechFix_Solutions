import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionReparacion } from './confirmacion';

describe('ConfirmacionReparacion', () => {
  let component: ConfirmacionReparacion;
  let fixture: ComponentFixture<ConfirmacionReparacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionReparacion],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmacionReparacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
