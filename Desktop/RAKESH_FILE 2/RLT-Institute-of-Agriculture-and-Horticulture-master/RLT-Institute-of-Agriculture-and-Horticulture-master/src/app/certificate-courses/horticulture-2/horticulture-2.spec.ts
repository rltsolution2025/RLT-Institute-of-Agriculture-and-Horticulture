import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Horticulture2 } from './horticulture-2';

describe('Horticulture2', () => {
  let component: Horticulture2;
  let fixture: ComponentFixture<Horticulture2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Horticulture2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Horticulture2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
