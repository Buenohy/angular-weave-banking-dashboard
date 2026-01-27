import { Component } from '@angular/core';
import { Input } from '../input/input';

@Component({
  selector: 'app-header',
  imports: [Input],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
