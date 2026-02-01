import { Component } from '@angular/core';
import { AvailabeBalanceChart } from '../../components/charts/availabe-balance-chart/availabe-balance-chart';
import { BalanceActivityChart } from '../../components/charts/balance-activity-chart/balance-activity-chart';

@Component({
  selector: 'app-balance',
  imports: [AvailabeBalanceChart, BalanceActivityChart],
  templateUrl: './balance.html',
  styleUrl: './balance.css',
})
export class Balance {}
