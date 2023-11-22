import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { Product } from './product/product.types';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  #products = signal<Product[]>([]);

  products = computed(() => this.#products());

  isStockEmpty = computed(() => this.#products().every(({ stock }) => stock === 0));

  protected apiService = inject(ApiService);

  fetch(): Observable<Product[]> {
    return this.apiService.getProducts().pipe(tap((products) => this.#products.set(products)));
  }

  decreaseStock(productId: string): void {
    this.#products.update((products) =>
      products.map((product) => {
        if (product.id === productId) {
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      }),
    );
  }

  isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }
}
