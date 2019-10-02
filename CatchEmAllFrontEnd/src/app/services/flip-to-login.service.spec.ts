import { TestBed } from '@angular/core/testing';

import { FlipToLoginService } from './flip-to-login.service';

describe('FlipToLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlipToLoginService = TestBed.get(FlipToLoginService);
    expect(service).toBeTruthy();
  });
});
