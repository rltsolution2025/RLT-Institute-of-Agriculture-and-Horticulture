import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorticulturalManagement } from './horticultural-management';

describe('HorticulturalManagement', () => {
  let component: HorticulturalManagement;
  let fixture: ComponentFixture<HorticulturalManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorticulturalManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorticulturalManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
