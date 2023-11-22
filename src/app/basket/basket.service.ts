import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Customer } from '../customer/customer.types';
import { ApiService } from '../shared/services/api.service';
import { BasketItem } from './basket.types';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  #items = signal<BasketItem[]>([]);

  items = computed(() => this.#items());
  //items: BasketItem[] = [];

  total = computed(() => this.#items().reduce((total, { price }) => total + price, 0));

  numberOfItems = this.items.length;

  private apiService = inject(ApiService);

  fetch(): Observable<BasketItem[]> {
    return this.apiService.getBasket().pipe(tap((items) => this.#items.set(items)));
  }

  addItem(productId: string): Observable<BasketItem> {
    return this.apiService.addToBasket(productId).pipe(tap((item) => this.#items.update((items) => [...items, item])));
  }

  checkout(customer: Customer): Observable<{ orderNumber: number }> {
    return this.apiService.checkoutBasket(customer).pipe(tap(() => this.#items.set([])));
  }
}
