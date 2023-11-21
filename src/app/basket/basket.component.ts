import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../shared/services/basket-service/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent {
  private basketService = inject(BasketService);
  /// protected basketItems: BasketItem[] = [];
  protected get basketItems() {
    return this.basketService.items;
  }
  //protected customer: Customer = { name: '', address: '', creditCard: '' };

  constructor(
    //private apiService: ApiService,
    private router: Router,
  ) {
    //this.apiService.getBasket().subscribe((basketItems) => (this.basketItems = basketItems));
    this.basketService.fetch().subscribe();
  }

  protected get basketTotal(): number {
    return this.basketItems.reduce((total, { price }) => total + price, 0);
  }

  protected checkout(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this.apiService.checkoutBasket(this.customer).subscribe(() => {
      this.basketItems = [];
      this.router.navigate(['']);
    });
  }
}
