import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-button-add',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './button-add.html',
  styleUrl: './button-add.css',
})
export class ButtonAdd {
  label = input.required<string>();
  icon = input<string>();
}
