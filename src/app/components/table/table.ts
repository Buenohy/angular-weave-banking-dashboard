import { Component } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [User],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  tableItems = [
    {
      userName: 'Gabriel Bueno',
      userEmail: 'bueno@yahoo.com',
      userImage: 'images/user.jpeg',

      amount: '$25,000.00',
      date: 'Jul 8, 2023',
      lastTransection: 'No Transection',
      card: 'Visa **** 1601',
      action: '-',
    },
    {
      userName: 'Gabriel Bueno',
      userEmail: 'bueno@yahoo.com',
      userImage: 'images/user.jpeg',

      amount: '$25,000.00',
      date: 'Jul 8, 2023',
      lastTransection: 'No Transection',
      card: 'Visa **** 1601',
      action: '-',
    },
    {
      userName: 'Gabriel Bueno',
      userEmail: 'bueno@yahoo.com',
      userImage: 'images/user.jpeg',

      amount: '$25,000.00',
      date: 'Jul 8, 2023',
      lastTransection: 'No Transection',
      card: 'Visa **** 1601',
      action: '-',
    },
    {
      userName: 'Gabriel Bueno',
      userEmail: 'bueno@yahoo.com',
      userImage: 'images/user.jpeg',

      amount: '$25,000.00',
      date: 'Jul 8, 2023',
      lastTransection: 'No Transection',
      card: 'Visa **** 1601',
      action: '-',
    },
    {
      userName: 'Gabriel Bueno',
      userEmail: 'bueno@yahoo.com',
      userImage: 'images/user.jpeg',

      amount: '$25,000.00',
      date: 'Jul 8, 2023',
      lastTransection: 'No Transection',
      card: 'Visa **** 1601',
      action: '-',
    },
    {
      userName: 'Gabriel Bueno',
      userEmail: 'bueno@yahoo.com',
      userImage: 'images/user.jpeg',

      amount: '$25,000.00',
      date: 'Jul 8, 2023',
      lastTransection: 'No Transection',
      card: 'Visa **** 1601',
      action: '-',
    },
    {
      userName: 'Gabriel Bueno',
      userEmail: 'bueno@yahoo.com',
      userImage: 'images/user.jpeg',

      amount: '$25,000.00',
      date: 'Jul 8, 2023',
      lastTransection: 'No Transection',
      card: 'Visa **** 1601',
      action: '-',
    },
    {
      userName: 'Gabriel Bueno',
      userEmail: 'bueno@yahoo.com',
      userImage: 'images/user.jpeg',

      amount: '$25,000.00',
      date: 'Jul 8, 2023',
      lastTransection: 'No Transection',
      card: 'Visa **** 1601',
      action: '-',
    },
  ];
}
