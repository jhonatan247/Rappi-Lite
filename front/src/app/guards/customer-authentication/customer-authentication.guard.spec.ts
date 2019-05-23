import { TestBed, async, inject } from '@angular/core/testing';

import { CustomerAuthenticationGuard } from './customer-authentication.guard';

describe('CustomerAuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAuthenticationGuard]
    });
  });

  it('should ...', inject([CustomerAuthenticationGuard], (guard: CustomerAuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
