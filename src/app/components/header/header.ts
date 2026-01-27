import { Component } from '@angular/core';
import { Input } from '../input/input';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  imports: [Input, Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
