import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantationManagement } from './plantation-management';

describe('PlantationManagement', () => {
  let component: PlantationManagement;
  let fixture: ComponentFixture<PlantationManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantationManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantationManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
