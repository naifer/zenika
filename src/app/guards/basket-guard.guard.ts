import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { map } from 'rxjs';
import { BasketService } from '../basket/basket.service';

export const basketGuardGuard: CanMatchFn = () => {
  return inject(BasketService)
    .fetch()
    .pipe(map((items) => items.length > 0));
};
