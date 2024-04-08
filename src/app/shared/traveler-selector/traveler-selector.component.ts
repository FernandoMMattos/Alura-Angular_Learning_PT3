import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-traveler-selector',
  templateUrl: './traveler-selector.component.html',
  styleUrls: ['./traveler-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TravelerSelectorComponent),
      multi: true,
    },
  ],
})
export class TravelerSelectorComponent implements ControlValueAccessor {
  @Input() title: string = '';
  @Input() subTitle: string = '';

  value: number = 0;
  onChange = (value: number) => {};
  onTouch = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  decrease() {
    if (this.value > 0) {
      this.value--;
      this.onChange(this.value);
      this.onTouch();
    }
  }

  increase() {
    this.value++;
    this.onChange(this.value);
    this.onTouch();
  }
}
