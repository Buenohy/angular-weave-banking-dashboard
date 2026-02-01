import { Component } from '@angular/core';
import { ButtonAdd } from '../button-add/button-add';

@Component({
  selector: 'app-need-help',
  standalone: true,
  imports: [ButtonAdd],
  templateUrl: './need-help.html',
  styleUrl: './need-help.css',
})
export class NeedHelp {}
