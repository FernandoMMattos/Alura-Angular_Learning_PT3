import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-control',
  templateUrl: './button-control.component.html',
  styleUrls: ['./button-control.component.scss'],
})
export class ButtonControlComponent {
  @Input() operation: 'increase' | 'decrease' = 'decrease';
  @Input() src = '';
  @Input() alt = '';
}
