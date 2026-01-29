import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { matMenuOutline, matPlusOutline } from '@ng-icons/material-icons/outline';
import { ButtonAdd } from '../../components/button-add/button-add';
import { ButtonIcon } from '../../components/button-icon/button-icon';
import { Input } from '../../components/input/input';
import { Table } from '../../components/table/table';

@Component({
  selector: 'app-subscription',
  imports: [ButtonAdd, Input, Table, ButtonIcon],
  viewProviders: [
    provideIcons({
      matPlusOutline,
      matMenuOutline,
    }),
  ],
  templateUrl: './subscription.html',
  styleUrl: './subscription.css',
})
export class Subscription {}
