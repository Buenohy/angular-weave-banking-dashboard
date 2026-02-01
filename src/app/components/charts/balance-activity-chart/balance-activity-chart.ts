import { Component } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import { EChartsCoreOption } from 'echarts/core';
import * as echarts from 'echarts/core'; // Importante para o gradiente funcionar

@Component({
  selector: 'app-balance-activity-chart',
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
})
export class BalanceActivityChart {
  chartOptions: EChartsCoreOption = {
    color: ['#10B981'],

    tooltip: {
      trigger: 'axis',
      backgroundColor: '#fff',
      borderWidth: 0,
      shadowColor: 'rgba(0,0,0,0.1)',
      shadowBlur: 10,
    },
    grid: {
      left: '2%',
      right: '2%',
      bottom: '5%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#9CA3AF' },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      interval: 10,
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#F3F4F6',
        },
      },
      axisLabel: {
        color: '#9CA3AF',
        formatter: (value: number) => {
          if (value === 0) return '0';
          return value + 'K';
        },
      },
    },
    series: [
      {
        name: 'Total Sales',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 3,
        },

        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(16, 185, 129, 0.3)',
            },
            {
              offset: 1,
              color: 'rgba(16, 185, 129, 0.01)',
            },
          ]),
        },

        data: [65, 72, 60, 70, 91, 75, 76, 62, 80],
      },
      {
        type: 'line',
        markLine: {
          symbol: 'none',
          label: { show: false },
          lineStyle: {
            type: 'dashed',
            color: '#10B981',
            width: 1,
          },
          data: [{ xAxis: 'May' }],
        },
      },
    ],
  };
}
