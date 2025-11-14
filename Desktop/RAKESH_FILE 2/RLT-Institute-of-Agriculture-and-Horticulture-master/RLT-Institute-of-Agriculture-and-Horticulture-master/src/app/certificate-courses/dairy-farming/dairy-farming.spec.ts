import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyFarming } from './dairy-farming';

describe('DairyFarming', () => {
  let component: DairyFarming;
  let fixture: ComponentFixture<DairyFarming>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DairyFarming]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyFarming);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
