import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/core/services/sale.service';
import IOnSale from 'src/app/core/types/type';

@Component({
  selector: 'app-on-sale',
  templateUrl: './on-sale.component.html',
  styleUrls: ['./on-sale.component.scss'],
})
export class OnSaleComponent implements OnInit {
  onSales!: IOnSale[];
  constructor(private service: SaleService) {}

  ngOnInit(): void {
    this.service.list().subscribe((data) => {
      this.onSales = data;
    });
  }
}
