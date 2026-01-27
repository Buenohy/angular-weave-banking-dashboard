import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  matAutoAwesomeMosaicOutline,
  matAnalyticsOutline,
  matInsertDriveFileOutline,
  matPeopleOutline,
  matCloudOutline,
  matCreditCardOutline,
  matReceiptOutline,
  matWalletOutline,
  matCardTravelOutline,
  matFolderOutline,
} from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIcon, RouterLink, RouterLinkActive],
  viewProviders: [
    provideIcons({
      matAutoAwesomeMosaicOutline,
      matAnalyticsOutline,
      matInsertDriveFileOutline,
      matPeopleOutline,
      matCloudOutline,
      matCreditCardOutline,
      matReceiptOutline,
      matWalletOutline,
      matCardTravelOutline,
      matFolderOutline,
    }),
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class navBar {
  navBarItems = [
    {
      label: 'Dashboard',
      icon: 'matFolderOutline',
      route: '/dashboard',
    },
    {
      label: 'Request',
      icon: 'matCardTravelOutline',
      route: '/request',
    },
    {
      label: 'Balance',
      icon: 'matWalletOutline',
      route: '/balance',
    },
    {
      label: 'Transaction',
      icon: 'matReceiptOutline',
      route: '/transaction',
    },
    {
      label: 'Card',
      icon: 'matCreditCardOutline',
      route: '/card',
    },
    {
      label: 'Subscription',
      icon: 'matCloudOutline',
      route: '/subscription',
    },
    {
      label: 'Employees',
      icon: 'matPeopleOutline',
      route: '/employees',
    },
    {
      label: 'Documents',
      icon: 'matInsertDriveFileOutline',
      route: '/documents',
    },
    {
      label: 'Analytics',
      icon: 'matAnalyticsOutline',
      route: '/analytics',
    },
  ];
}
