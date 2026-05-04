import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsamblePc } from './ensamble-pc';

describe('EnsamblePc', () => {
  let component: EnsamblePc;
  let fixture: ComponentFixture<EnsamblePc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsamblePc],
    }).compileComponents();

    fixture = TestBed.createComponent(EnsamblePc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
