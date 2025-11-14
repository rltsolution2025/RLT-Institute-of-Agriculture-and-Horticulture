import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableProduction } from './vegetable-production';

describe('VegetableProduction', () => {
  let component: VegetableProduction;
  let fixture: ComponentFixture<VegetableProduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VegetableProduction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegetableProduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
