import { Component } from '@angular/core';
import { ButtonAdd } from '../../components/button-add/button-add';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { Table } from '../../components/table/table';

@Component({
  selector: 'app-subscription',
  imports: [ButtonAdd, Input, Button, Table],
  templateUrl: './subscription.html',
  styleUrl: './subscription.css',
})
export class Subscription {}
