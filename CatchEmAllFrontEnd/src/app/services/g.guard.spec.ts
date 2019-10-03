import { TestBed, async, inject } from '@angular/core/testing';

import { GGuard } from './g.guard';

describe('GGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GGuard]
    });
  });

  it('should ...', inject([GGuard], (guard: GGuard) => {
    expect(guard).toBeTruthy();
  }));
});
