import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../core/material/material.module';
import { HomeRountingModule } from './home-routing.module';


@NgModule({
  declarations: [DepoimentosComponent, PromocoesComponent, HomeComponent],
  imports: [CommonModule, MaterialModule, SharedModule, HomeRountingModule],
  exports: [DepoimentosComponent, PromocoesComponent, HomeComponent],
})
export class HomeModule {}
