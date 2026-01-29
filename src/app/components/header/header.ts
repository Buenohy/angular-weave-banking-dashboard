import { Component } from '@angular/core';
import { Input } from '../input/input';
import { User } from '../user/user';
import { provideIcons } from '@ng-icons/core';
import { matMessageOutline, matNotificationsOutline } from '@ng-icons/material-icons/outline';
import { ButtonIcon } from '../button-icon/button-icon';

@Component({
  selector: 'app-header',
  imports: [Input, User, ButtonIcon],
  viewProviders: [
    provideIcons({
      matMessageOutline,
      matNotificationsOutline,
    }),
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
