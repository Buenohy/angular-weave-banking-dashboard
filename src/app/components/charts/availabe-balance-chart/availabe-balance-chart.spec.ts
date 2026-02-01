import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabeBalanceChart } from './availabe-balance-chart';

describe('AvailabeBalanceChart', () => {
  let component: AvailabeBalanceChart;
  let fixture: ComponentFixture<AvailabeBalanceChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabeBalanceChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabeBalanceChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
