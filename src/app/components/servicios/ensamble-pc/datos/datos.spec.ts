import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEnsamble } from './datos';

describe('DatosEnsamble', () => {
  let component: DatosEnsamble;
  let fixture: ComponentFixture<DatosEnsamble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosEnsamble],
    }).compileComponents();

    fixture = TestBed.createComponent(DatosEnsamble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
