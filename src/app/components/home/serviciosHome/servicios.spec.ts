import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Servicios } from './servicios';

describe('Servicios', () => {
  let component: Servicios;
  let fixture: ComponentFixture<Servicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicios, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Servicios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
