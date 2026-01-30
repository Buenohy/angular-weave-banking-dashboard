import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldMapChart } from './world-map-chart';

describe('WorldMapChart', () => {
  let component: WorldMapChart;
  let fixture: ComponentFixture<WorldMapChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldMapChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldMapChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
