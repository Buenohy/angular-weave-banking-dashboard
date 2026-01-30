import { Component } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsCoreOption } from 'echarts/core';
import { GraphicComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { min } from 'rxjs';

@Component({
  selector: 'app-balance-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  template: ` <div echarts [options]="chartOptions" class="chart-container"></div> `,
  styles: [
    `
      .chart-container {
        width: 550px;
        height: 300px;
      }
    `,
  ],
})
export class BalanceChart {
  chartOptions: EChartsCoreOption = {
    title: {
      text: 'Stacked Line',
    },
    color: ['#4CBB17', '#FF0000', '#FFFF00'],
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    },
    yAxis: {
      type: 'value',
      min: -60,
      max: 100,
      interval: 20,
    },
    series: [
      {
        name: 'Blueprint UK',
        type: 'line',
        smooth: false,
        showSymbol: false,
        stack: 'Total',
        data: [20, 20, 90, 60, 15, 2, 2, 8, 12, 45],
      },
      {
        name: 'Blueprint US',
        type: 'line',
        smooth: false,
        showSymbol: false,
        stack: 'Total',
        data: [0, -60, -25, 0, -20, -60, -60, -35, -20, 0],
      },
      {
        name: 'Blueprint HK',
        type: 'line',
        smooth: false,
        showSymbol: false,
        stack: 'Total',
        data: [-60, 0, 0, -60, 60, 60, 25, 35, 45, -30],
      },
    ],
  };
}
