import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Request } from './pages/request/request';
import { Balance } from './pages/balance/balance';
import { Transaction } from './pages/transaction/transaction';
import { Card } from './pages/card/card';
import { Subscription } from './pages/subscription/subscription';
import { Employees } from './pages/employees/employees';
import { Documents } from './pages/documents/documents';
import { Analytics } from './pages/analytics/analytics';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: Dashboard,
    title: 'Meu Dashboard',
  },
  {
    path: 'request',
    component: Request,
    title: 'Meu Request',
  },
  {
    path: 'balance',
    component: Balance,
    title: 'Meu Balance',
  },
  {
    path: 'transaction',
    component: Transaction,
    title: 'Meu Transaction',
  },
  {
    path: 'card',
    component: Card,
    title: 'Meu Card',
  },
  {
    path: 'subscription',
    component: Subscription,
    title: 'Meu Subscription',
  },
  {
    path: 'employees',
    component: Employees,
    title: 'Meu Employees',
  },
  {
    path: 'documents',
    component: Documents,
    title: 'Meu Documents',
  },
  {
    path: 'analytics',
    component: Analytics,
    title: 'Meu Analytics',
  },
];
