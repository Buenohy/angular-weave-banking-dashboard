import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  image = input<string>('images/user.jpeg');
  name = input.required<string>();
  email = input.required<string>();
}
