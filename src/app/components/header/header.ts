import { Component } from '@angular/core';
import { Input } from '../input/input';
import { Button } from '../button/button';
import { User } from '../user/user';

@Component({
  selector: 'app-header',
  imports: [Input, Button, User],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
