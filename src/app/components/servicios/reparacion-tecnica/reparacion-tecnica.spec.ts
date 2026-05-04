import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparacionTecnica } from './reparacion-tecnica';

describe('ReparacionTecnica', () => {
  let component: ReparacionTecnica;
  let fixture: ComponentFixture<ReparacionTecnica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReparacionTecnica],
    }).compileComponents();

    fixture = TestBed.createComponent(ReparacionTecnica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
