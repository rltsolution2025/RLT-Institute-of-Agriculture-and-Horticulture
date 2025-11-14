import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedManagement } from './seed-management';

describe('SeedManagement', () => {
  let component: SeedManagement;
  let fixture: ComponentFixture<SeedManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeedManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
