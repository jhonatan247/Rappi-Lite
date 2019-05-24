import { TestBed, async, inject } from '@angular/core/testing';

import { AdminAuthenticationGuard } from './admin-authentication.guard';

describe('AdminAuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthenticationGuard]
    });
  });

  it('should ...', inject([AdminAuthenticationGuard], (guard: AdminAuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
