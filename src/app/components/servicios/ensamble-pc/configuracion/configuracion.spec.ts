import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionEnsamble } from './configuracion';

describe('ConfiguracionEnsamble', () => {
  let component: ConfiguracionEnsamble;
  let fixture: ComponentFixture<ConfiguracionEnsamble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionEnsamble],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionEnsamble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
