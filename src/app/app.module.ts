import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WELCOME_MSG } from './app.token';
import { BasketComponent } from './basket/basket.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './catalog/product/product.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: WELCOME_MSG,
      useValue: 'Bienvenue sur Zenika Ecommerce',
    },
  ],
  declarations: [
    AppComponent,
    BasketComponent,
    CatalogComponent,
    FooterComponent,
    ProductComponent,
    MenuComponent,
    ProductDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
