import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEnsamble } from './pago';

describe('PagoEnsamble', () => {
  let component: PagoEnsamble;
  let fixture: ComponentFixture<PagoEnsamble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoEnsamble],
    }).compileComponents();

    fixture = TestBed.createComponent(PagoEnsamble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
