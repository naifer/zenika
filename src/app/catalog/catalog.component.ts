import { Component, inject } from '@angular/core';
import { MY_TOKEN } from '../app.provider';
import { BasketItem } from '../basket/basket.types';
import { Product } from '../product/product.types';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {
  protected products: Product[] = [];

  private basketItems: BasketItem[] = [];

  protected welcomeMsg = inject(MY_TOKEN);

  constructor(private apiService: ApiService) {
    this.apiService.getProducts().subscribe((products) => (this.products = products));
    this.apiService.getBasket().subscribe((basketItems) => (this.basketItems = basketItems));
  }

  protected get basketTotal(): number {
    return this.basketItems.reduce((total: number, { price }) => total + price, 0);
  }

  protected addToBasket(product: Product): void {
    this.apiService.addToBasket(product.id).subscribe((basketItem) => {
      this.basketItems.push(basketItem);
      this.decreaseStock(product);
    });
  }

  private decreaseStock(product: Product): void {
    product.stock -= 1;
  }

  protected isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }

  protected get isStockEmpty(): boolean {
    return this.products.every(({ stock }) => stock === 0);
  }
}
