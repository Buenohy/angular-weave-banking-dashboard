import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceActivityChart } from './balance-activity-chart';

describe('BalanceActivityChart', () => {
  let component: BalanceActivityChart;
  let fixture: ComponentFixture<BalanceActivityChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceActivityChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceActivityChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
