import { Component } from '@angular/core';

import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsCoreOption } from 'echarts/core';
import { GraphicComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { min } from 'rxjs';

@Component({
  selector: 'app-monthly-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  template: ` <div echarts [options]="chartOptions" class="chart-container"></div> `,
  styles: [
    `
      .chart-container {
        width: 470px;
        height: 300px;
      }
    `,
  ],
})
export class MonthlyChart {
  chartOptions: EChartsCoreOption = {
    legend: {
      data: ['bar', 'bar2', 'bar3', 'bar4'],
      left: '10%',
    },
    brush: {
      toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
      xAxisIndex: 0,
    },
    toolbox: {
      feature: {
        magicType: {
          type: ['stack'],
        },
        dataView: {},
      },
    },
    tooltip: {},
    xAxis: {
      data: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisLine: { onZero: true },
      splitLine: { show: false },
      splitArea: { show: false },
    },
    yAxis: {
      type: 'value',
      data: ['60k', '60k', '60k', '60k', '60k'],
    },
    grid: {
      bottom: 100,
    },
    series: [
      {
        name: 'bar',
        type: 'bar',
        stack: 'one',
        data: [20, 20, 90, 60, 15, 2, 2, 8, 12, 45],
      },
      {
        name: 'bar2',
        type: 'bar',
        stack: 'one',
        data: [20, 20, 90, 60, 15, 2, 2, 8, 12, 45],
      },
      {
        name: 'bar3',
        type: 'bar',
        stack: 'two',
        data: [20, 20, 90, 60, 15, 2, 2, 8, 12, 45],
      },
      {
        name: 'bar4',
        type: 'bar',
        stack: 'two',
        data: [20, 20, 90, 60, 15, 2, 2, 8, 12, 45],
      },
    ],
  };
}
