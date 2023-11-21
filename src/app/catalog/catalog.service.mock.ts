import { of } from 'rxjs';
import { CatalogService } from './catalog.service';
import { Product } from './product/product.types';

export const MockCatalogService: Partial<CatalogService> = {
  products: [
    { id: 'id', title: 'title', description: 'description', photo: 'photo', price: 10, stock: 2 },
  ] as Product[],

  isStockEmpty: true,

  fetch: jasmine
    .createSpy('fetch')
    .and.returnValue(
      of([{ id: 'id', title: 'title', description: 'description', photo: 'photo', price: 10, stock: 2 }] as Product[]),
    ),

  decreaseStock: jasmine.createSpy('decreaseStock'),

  isAvailable: jasmine.createSpy('isAvailable').and.returnValue(true),
};
