import { Component } from '@angular/core';
import { AvailabeBalanceChart } from '../../components/charts/availabe-balance-chart/availabe-balance-chart';
import { BalanceActivityChart } from '../../components/charts/balance-activity-chart/balance-activity-chart';
import { RecentTransaction } from '../../components/recent-transaction/recent-transaction';
import { NeedHelp } from '../../components/need-help/need-help';

@Component({
  selector: 'app-balance',
  imports: [AvailabeBalanceChart, BalanceActivityChart, RecentTransaction, NeedHelp],
  templateUrl: './balance.html',
  styleUrl: './balance.css',
})
export class Balance {}
