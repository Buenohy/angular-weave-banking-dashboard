import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matPlusOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-button-add',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      matPlusOutline,
    }),
  ],
  templateUrl: './button-add.html',
  styleUrl: './button-add.css',
})
export class ButtonAdd {}
