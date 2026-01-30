import { Component } from '@angular/core';

import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsCoreOption } from 'echarts/core';
import { GraphicComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { min } from 'rxjs';

@Component({
  selector: 'app-activity-chart',
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
export class ActivityChart {
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
      right: '0%',
      top: 'bottom',
      orient: 'vertical',
      data: ['Subscription', 'Investing', 'Groceries', 'Online Shop'],
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
          { value: 20, name: 'Subscription' },
          { value: 30, name: 'Investing' },
          { value: 15, name: 'Groceries' },
          { value: 28, name: 'Online Shop' },
        ],
      },
    ],
  };
}
