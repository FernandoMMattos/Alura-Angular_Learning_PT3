import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class FormSearchService {
  formSearch: FormGroup;

  constructor(private dialog: MatDialog) {
    this.formSearch = new FormGroup({
      oneWay: new FormControl(false),
      origin: new FormControl(null),
      destination: new FormControl(null),
      type: new FormControl('Economy'),
      adults: new FormControl(1),
      childrens: new FormControl(0),
      infants: new FormControl(0),
    });
  }

  getTravelers(): string {
    let description = '';
    const adults = this.formSearch.get('adults')?.value;
    if (adults && adults > 0)
      description += `${adults} adult${adults > 1 ? 's' : ''}`;

    const children = this.formSearch.get('children')?.value;
    if (children && children > 0)
      description += `${children} adult${children > 1 ? 's' : ''}`;

    const infants = this.formSearch.get('infants')?.value;
    if (infants && infants > 0)
      description += `${infants} adult${infants > 1 ? 's' : ''}`;
    return description;
  }

  obtainControl(name: string): FormControl {
    const control = this.formSearch.get(name);
    if (!control)
      throw new Error(`FormGroup with name "${name}" do not exist.`);
    return control as FormControl;
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%',
    });
  }

  changeType(e: MatChipSelectionChange, type: string) {
    if (e.selected)
      this.formSearch.patchValue({
        type,
      });
  }

  swapDestinations(): void {
    const origin = this.formSearch.get('origin')?.value;
    const destination = this.formSearch.get('destination')?.value;

    this.formSearch.patchValue({
      origin: destination,
      destination: origin,
    });
  }
}
