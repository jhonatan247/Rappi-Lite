import { TestBed, async, inject } from '@angular/core/testing';

import { ShopkeeperAuthenticationGuard } from './shopkeeper-authentication.guard';

describe('ShopkeeperAuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopkeeperAuthenticationGuard]
    });
  });

  it('should ...', inject([ShopkeeperAuthenticationGuard], (guard: ShopkeeperAuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
