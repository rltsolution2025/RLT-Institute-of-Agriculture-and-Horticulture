import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicFarming } from './organic-farming';

describe('OrganicFarming', () => {
  let component: OrganicFarming;
  let fixture: ComponentFixture<OrganicFarming>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganicFarming]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganicFarming);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
