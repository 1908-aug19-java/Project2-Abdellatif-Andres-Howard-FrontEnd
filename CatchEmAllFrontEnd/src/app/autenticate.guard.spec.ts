import { TestBed, async, inject } from '@angular/core/testing';

import { AutenticateGuard } from './autenticate.guard';

describe('AutenticateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticateGuard]
    });
  });

  it('should ...', inject([AutenticateGuard], (guard: AutenticateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
