import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticationGuardGuard } from './authentication-guard.guard';

describe('AuthenticationGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationGuardGuard]
    });
  });

  it('should ...', inject([AuthenticationGuardGuard], (guard: AuthenticationGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
