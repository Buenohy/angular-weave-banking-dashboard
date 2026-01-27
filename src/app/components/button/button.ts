import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matSearchOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      matSearchOutline,
    }),
  ],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {}
