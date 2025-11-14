import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioFertilizerProduction } from './bio-fertilizer-production';

describe('BioFertilizerProduction', () => {
  let component: BioFertilizerProduction;
  let fixture: ComponentFixture<BioFertilizerProduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioFertilizerProduction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioFertilizerProduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
