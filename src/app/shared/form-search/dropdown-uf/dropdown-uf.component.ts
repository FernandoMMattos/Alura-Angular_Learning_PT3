import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { UFService } from 'src/app/core/services/uf.service';
import { IUF } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() control!: FormControl;

  UF: IUF[] = [];
  filteredOptions$?: Observable<IUF[]>;

  constructor(private service: UFService) {}

  ngOnInit(): void {
    this.service.list().subscribe((data) => {
      this.UF = data;
    });
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filterUfs(value))
    )
  }

  filterUfs(value: string): IUF[] {
    const valueFiltered = value?.toLowerCase();
    const result = this.UF.filter((state) =>
      state.nome.toLowerCase().includes(valueFiltered)
    );
    return result;
  }
}
