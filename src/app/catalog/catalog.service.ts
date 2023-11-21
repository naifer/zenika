import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { Product } from './product/product.types';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  products: Product[] = [];

  get isStockEmpty(): boolean {
    return this.products.every(({ stock }) => stock === 0);
  }

  protected apiService = inject(ApiService);

  fetch(): Observable<Product[]> {
    return this.apiService.getProducts().pipe(tap((products) => (this.products = products)));
  }

  decreaseStock(productId: string): void {
    this.products = this.products.map((product) => {
      if (product.id === productId) {
        return { ...product, stock: product.stock - 1 };
      }
      return product;
    });
  }

  isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }
}
