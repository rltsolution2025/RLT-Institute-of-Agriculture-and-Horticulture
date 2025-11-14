import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FodderFeedManagement } from './fodder-feed-management';

describe('FodderFeedManagement', () => {
  let component: FodderFeedManagement;
  let fixture: ComponentFixture<FodderFeedManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FodderFeedManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FodderFeedManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
