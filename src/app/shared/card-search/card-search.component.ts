import { Component, Input } from '@angular/core';
import IOnSale from 'src/app/core/types/type';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent {
  @Input() onSale!: IOnSale;
}
