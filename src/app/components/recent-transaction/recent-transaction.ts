import { Component, input } from '@angular/core';

@Component({
  selector: 'app-recent-transaction',
  standalone: true,
  imports: [],
  templateUrl: './recent-transaction.html',
  styleUrl: './recent-transaction.css',
})
export class RecentTransaction {
  RecentTransactionItems = [
    {
      icon: 'images/user.jpeg',
      label: 'Load Balance',
      data: '8 July,2023',
      history: 'Now',
      value: '$150.00',
    },
    {
      icon: 'images/user.jpeg',
      label: 'Load Balance',
      data: '8 July,2023',
      history: 'Now',
      value: '$150.00',
    },
    {
      icon: 'images/user.jpeg',
      label: 'Load Balance',
      data: '8 July,2023',
      history: 'Now',
      value: '$150.00',
    },
    {
      icon: 'images/user.jpeg',
      label: 'Load Balance',
      data: '8 July,2023',
      history: 'Now',
      value: '$150.00',
    },
    {
      icon: 'images/user.jpeg',
      label: 'Load Balance',
      data: '8 July,2023',
      history: 'Now',
      value: '$150.00',
    },
  ];
}
