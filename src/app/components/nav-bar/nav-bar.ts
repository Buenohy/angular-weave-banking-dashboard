import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matAutoAwesomeMosaicOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ matAutoAwesomeMosaicOutline })],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {}
