import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CatalogComponent } from './catalog/catalog.component';
import { basketGuardGuard } from './guards/basket-guard.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PRODUCT_DETAILS_PARAM_KEY } from './product-details/product-details.config';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  {
    path: 'basket',
    component: BasketComponent,
    canMatch: [basketGuardGuard],
  },
  {
    path: `products/:${PRODUCT_DETAILS_PARAM_KEY}`,
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
