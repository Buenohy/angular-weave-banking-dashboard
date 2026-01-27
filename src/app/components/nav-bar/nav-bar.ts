import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matAutoAwesomeMosaicOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIcon, RouterLink, RouterLinkActive],
  viewProviders: [provideIcons({ matAutoAwesomeMosaicOutline })],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class navBar {
  navBarItems = [
    {
      label: 'Dashboard',
      icon: 'matAutoAwesomeMosaicOutline',
      route: '/dashboard',
    },
    {
      label: 'Request',
      icon: 'matAutoAwesomeMosaicOutline',
      route: '/request',
    },
    {
      label: 'Balance',
      icon: 'matAutoAwesomeMosaicOutline',
      route: '/balance',
    },
    {
      label: 'Transaction',
      icon: 'matAutoAwesomeMosaicOutline',
      route: '/transaction',
    },
    {
      label: 'Card',
      icon: 'matAutoAwesomeMosaicOutline',
      route: '/card',
    },
    {
      label: 'Subscription',
      icon: 'matAutoAwesomeMosaicOutline',
      route: '/subscription',
    },
    {
      label: 'Employees',
      icon: 'matAutoAwesomeMosaicOutline',
      route: '/employees',
    },
    {
      label: 'Documents',
      icon: 'matAutoAwesomeMosaicOutline',
      route: '/documents',
    },
    {
      label: 'Analytics',
      icon: 'matAutoAwesomeMosaicOutline',
      route: '/analytics',
    },
  ];
}
