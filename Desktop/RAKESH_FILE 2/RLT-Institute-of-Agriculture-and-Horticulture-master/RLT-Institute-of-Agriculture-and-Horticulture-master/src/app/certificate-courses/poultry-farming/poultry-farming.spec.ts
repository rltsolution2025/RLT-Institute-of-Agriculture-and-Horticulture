import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoultryFarming } from './poultry-farming';

describe('PoultryFarming', () => {
  let component: PoultryFarming;
  let fixture: ComponentFixture<PoultryFarming>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoultryFarming]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoultryFarming);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
