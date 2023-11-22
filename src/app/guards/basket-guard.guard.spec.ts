import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { basketGuardGuard } from './basket-guard.guard';

describe('basketGuardGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => basketGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
