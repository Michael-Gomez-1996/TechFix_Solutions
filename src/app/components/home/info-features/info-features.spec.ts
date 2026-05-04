import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFeatures } from './info-features';

describe('InfoFeatures', () => {
  let component: InfoFeatures;
  let fixture: ComponentFixture<InfoFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoFeatures],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoFeatures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
