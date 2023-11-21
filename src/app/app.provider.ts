import { InjectionToken, ValueProvider } from '@angular/core';

export const MY_TOKEN = new InjectionToken<string>('myToken');

export const tokenProvider: ValueProvider = {
  provide: MY_TOKEN,
  useValue: 'Bienvenue sur Zenika Ecommerce',
};
