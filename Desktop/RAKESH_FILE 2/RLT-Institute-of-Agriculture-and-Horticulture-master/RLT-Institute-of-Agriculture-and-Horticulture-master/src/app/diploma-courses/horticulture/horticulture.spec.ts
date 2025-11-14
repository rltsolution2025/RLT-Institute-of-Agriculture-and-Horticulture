import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Horticulture } from './horticulture';

describe('Horticulture', () => {
  let component: Horticulture;
  let fixture: ComponentFixture<Horticulture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Horticulture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Horticulture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
