import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Customer } from '../customer/customer.types';
import { ApiService } from '../shared/services/api.service';
import { BasketItem } from './basket.types';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  //items: BasketItem[] = [];
  #basket$ = new BehaviorSubject<BasketItem[]>([]); //version private
  basket$ = this.#basket$.asObservable(); //version public pour l'ext

  total$: Observable<number> = this.#basket$.pipe(map((items) => items.reduce((total, { price }) => total + price, 0)));
  numberOfItems$: Observable<number> = this.#basket$.pipe(map((items) => items.length));
  /*get total(): number {
    return this.items.reduce((total, { price }) => total + price, 0);
  }*/

  /*get numberOfItems(): number {
    return this.items.length;
  }*/

  private apiService = inject(ApiService);

  fetch(): Observable<BasketItem[]> {
    return this.apiService.getBasket().pipe(tap((items) => this.#basket$.next(items)));
  }

  addItem(productId: string): Observable<BasketItem> {
    return this.apiService
      .addToBasket(productId)
      .pipe(tap((item) => this.#basket$.next([...this.#basket$.value, item])));
  }

  checkout(customer: Customer): Observable<{ orderNumber: number }> {
    return this.apiService.checkoutBasket(customer).pipe(tap(() => this.#basket$.next([])));
  }
}
