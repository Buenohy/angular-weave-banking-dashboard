import { Component } from '@angular/core';

import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsCoreOption } from 'echarts/core';
import { GraphicComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { min } from 'rxjs';

@Component({
  selector: 'app-availabe-balance-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  template: ` <div echarts [options]="chartOptions" class="chart-container"></div> `,
  styles: [
    `
      .chart-container {
        width: 500px;
        height: 300px;
      }
    `,
  ],
  templateUrl: './availabe-balance-chart.html',
  styleUrl: './availabe-balance-chart.css',
})
export class AvailabeBalanceChart {
  chartOptions: EChartsCoreOption = {
    title: {
      text: 'Nightingale Chart',
      subtext: 'Fake Data',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      right: 'center',
      top: 'bottom',
      orient: 'horizontal',
      data: ['Balance', 'Pending'],
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: 'Area Mode',
        type: 'pie',
        radius: [20, 140],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5,
        },
        label: {
          show: false,
        },
        data: [
          { value: 18, name: 'Balance' },
          { value: 15, name: 'Pending' },
        ],
      },
    ],
  };
}
