import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navBar } from './components/nav-bar/nav-bar';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, navBar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-weave-banking-dashboard');
}
