import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-button-icon',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './button-icon.html',
  styleUrl: './button-icon.css',
})
export class ButtonIcon {
  icon = input<string>();
}
