import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FodderFeedManagement2 } from './fodder-feed-management-2';

describe('FodderFeedManagement2', () => {
  let component: FodderFeedManagement2;
  let fixture: ComponentFixture<FodderFeedManagement2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FodderFeedManagement2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FodderFeedManagement2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
