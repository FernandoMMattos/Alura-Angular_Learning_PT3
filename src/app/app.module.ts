import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardComponent } from './shared/card/card.component';
import { ContainerComponent } from './shared/container/container.component';
import { CardSearchComponent } from './shared/card-search/card-search.component';
import { CardReviewComponent } from './shared/card-review/card-review.component';
import { FormSearchComponent } from './shared/form-search/form-search.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ButtonControlComponent } from './shared/button-control/button-control.component';
import { DropdownUfComponent } from './shared/form-search/dropdown-uf/dropdown-uf.component';
import { ReviewsComponent } from './pages/home/reviews/reviews.component';
import { OnSaleComponent } from './pages/home/on-sale/on-sale.component';
import { TravelerSelectorComponent } from './shared/traveler-selector/traveler-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    HomeComponent,
    CardSearchComponent,
    CardReviewComponent,
    FormSearchComponent,
    ModalComponent,
    ButtonControlComponent,
    DropdownUfComponent,
    ReviewsComponent,
    OnSaleComponent,
    TravelerSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
