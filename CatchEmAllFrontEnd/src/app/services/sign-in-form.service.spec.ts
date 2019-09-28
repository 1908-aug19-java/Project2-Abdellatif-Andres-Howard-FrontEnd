import { TestBed } from '@angular/core/testing';

import { SignInFormService } from './sign-in-form.service';

describe('SignInFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignInFormService = TestBed.get(SignInFormService);
    expect(service).toBeTruthy();
  });
});
