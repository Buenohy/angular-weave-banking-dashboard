import { Component } from '@angular/core';
import { CardDashboard } from '../../components/card-dashboard/card-dashboard';
import { provideIcons } from '@ng-icons/core';
import {
  matApartmentOutline,
  matMonetizationOnOutline,
  matAttachMoneyOutline,
} from '@ng-icons/material-icons/outline';
import { heroArrowTrendingUp } from '@ng-icons/heroicons/outline';
@Component({
  selector: 'app-dashboard',
  imports: [CardDashboard],
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
