import { TestBed } from '@angular/core/testing';

import { TrigerTroggleService } from './triger-troggle.service';

describe('TrigerTroggleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrigerTroggleService = TestBed.get(TrigerTroggleService);
    expect(service).toBeTruthy();
  });
});
