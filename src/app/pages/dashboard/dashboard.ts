import { Component } from '@angular/core';
import { CardDashboard } from '../../components/card-dashboard/card-dashboard';
import { provideIcons } from '@ng-icons/core';
import {
  matApartmentOutline,
  matMonetizationOnOutline,
  matAttachMoneyOutline,
} from '@ng-icons/material-icons/outline';
import { heroArrowTrendingUp } from '@ng-icons/heroicons/outline';
import { BalanceChart } from '../../components/charts/balance-chart/balance-chart';
import { CardBalance } from '../../components/charts/card-balance/card-balance';
import { MonthlyChart } from '../../components/charts/monthly-chart/monthly-chart';
import { ActivityChart } from '../../components/charts/activity-chart/activity-chart';
import { WorldMapChart } from '../../components/charts/world-map-chart/world-map-chart';
@Component({
  selector: 'app-dashboard',
  imports: [CardDashboard, BalanceChart, CardBalance, MonthlyChart, ActivityChart, WorldMapChart],
  viewProviders: [
    provideIcons({
      matMonetizationOnOutline,
      matApartmentOutline,
      matAttachMoneyOutline,
      heroArrowTrendingUp,
    }),
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
