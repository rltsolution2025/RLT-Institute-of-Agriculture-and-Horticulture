import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmManagement } from './farm-management';

describe('FarmManagement', () => {
  let component: FarmManagement;
  let fixture: ComponentFixture<FarmManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
