import { Component } from '@angular/core';
import { ButtonAdd } from '../../components/button-add/button-add';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { Table } from '../../components/table/table';
import { provideIcons } from '@ng-icons/core';
import { matPlusOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-subscription',
  imports: [ButtonAdd, Input, Button, Table],
  viewProviders: [
    provideIcons({
      matPlusOutline,
    }),
  ],
  templateUrl: './subscription.html',
  styleUrl: './subscription.css',
})
export class Subscription {}
