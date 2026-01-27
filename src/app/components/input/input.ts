import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matSearchOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      matSearchOutline,
    }),
  ],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {}
