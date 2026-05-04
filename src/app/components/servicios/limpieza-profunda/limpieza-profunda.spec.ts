import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezaProfunda } from './limpieza-profunda';

describe('LimpiezaProfunda', () => {
  let component: LimpiezaProfunda;
  let fixture: ComponentFixture<LimpiezaProfunda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimpiezaProfunda],
    }).compileComponents();

    fixture = TestBed.createComponent(LimpiezaProfunda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
