import { of } from 'rxjs';
import { BasketService } from './basket.service';
import { BasketItem } from './basket.types';

export const MockBasketService: Partial<BasketService> = {
  items: [] as BasketItem[],

  total: 0,

  numberOfItems: 0,

  fetch: jasmine.createSpy('fetch').and.returnValue(of([] as BasketItem[])),

  addItem: jasmine.createSpy('addItem').and.returnValue(of({ id: 'id', title: 'title', price: 10 } as BasketItem)),

  checkout: jasmine.createSpy('checkout').and.returnValue(of({ orderNumber: 1 })),
};
