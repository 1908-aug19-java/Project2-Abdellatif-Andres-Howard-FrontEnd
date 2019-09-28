import { TestBed } from '@angular/core/testing';

import { TrainerGetService } from './trainer-get.service';

describe('TrainerGetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerGetService = TestBed.get(TrainerGetService);
    expect(service).toBeTruthy();
  });
});
