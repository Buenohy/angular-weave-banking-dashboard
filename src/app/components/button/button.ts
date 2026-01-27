import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matMessageOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      matMessageOutline,
    }),
  ],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {}
