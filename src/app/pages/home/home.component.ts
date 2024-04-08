import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/core/services/sale.service';
import IOnSale from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  onSales!: IOnSale[]

  constructor(private service: SaleService) {}

  ngOnInit(): void {
    this.service.list().subscribe((answer) => {
      this.onSales = answer
    });
  }
}
