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
      label: '',
      icon: '',
      route: '',
    },
    {
      label: '',
      icon: '',
      route: '',
    },
    {
      label: '',
      icon: '',
      route: '',
    },
    {
      label: '',
      icon: '',
      route: '',
    },
    {
      label: '',
      icon: '',
      route: '',
    },
    {
      label: '',
      icon: '',
      route: '',
    },
    {
      label: '',
      icon: '',
      route: '',
    },
    {
      label: '',
      icon: '',
      route: '',
    },
  ];
}
