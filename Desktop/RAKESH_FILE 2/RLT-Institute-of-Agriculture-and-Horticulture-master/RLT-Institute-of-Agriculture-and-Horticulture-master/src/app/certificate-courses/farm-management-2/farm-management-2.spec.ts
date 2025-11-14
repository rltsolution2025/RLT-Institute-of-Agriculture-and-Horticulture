import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmManagement2 } from './farm-management-2';

describe('FarmManagement2', () => {
  let component: FarmManagement2;
  let fixture: ComponentFixture<FarmManagement2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmManagement2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmManagement2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
