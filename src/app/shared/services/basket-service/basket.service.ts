import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BasketItem } from '../../../basket/basket.types';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  items: BasketItem[];
  constructor() {}

  total(): number {
    return this.items.reduce((total, { price }) => total + price, 0);
  }
  numberOfItems(): number {
    return this.items.length;
  }
  private apiService = inject(ApiService);

  fetch(): Observable<BasketItem[]> {
    return this.apiService.getBasket().pipe(tap((items) => (this.items = items)));
  }
  //checkout(): Observable<void> {
  /*this.apiService.checkoutBasket(this.customer).subscribe(() => {
      this.basketItems = [];
      this.router.navigate(['']);
    });
    return this.apiService.getBasket().pipe(tap((items) => (this.items = items)));*/
  //}
}
