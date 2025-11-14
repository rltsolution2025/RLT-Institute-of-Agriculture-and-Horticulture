import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureManagement } from './agriculture-management';

describe('AgricultureManagement', () => {
  let component: AgricultureManagement;
  let fixture: ComponentFixture<AgricultureManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgricultureManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgricultureManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
