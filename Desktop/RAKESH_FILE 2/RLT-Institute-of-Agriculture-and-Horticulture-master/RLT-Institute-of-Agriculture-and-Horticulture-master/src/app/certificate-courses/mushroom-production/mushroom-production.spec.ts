import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomProduction } from './mushroom-production';

describe('MushroomProduction', () => {
  let component: MushroomProduction;
  let fixture: ComponentFixture<MushroomProduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MushroomProduction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MushroomProduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
