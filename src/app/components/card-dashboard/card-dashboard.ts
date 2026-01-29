import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-card-dashboard',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './card-dashboard.html',
  styleUrl: './card-dashboard.css',
})
export class CardDashboard {
  icon = input<string>();
  label = input<string>();
  value = input<string>();
  iconPercentage = input<string>();
  percentage = input<string>();
}
