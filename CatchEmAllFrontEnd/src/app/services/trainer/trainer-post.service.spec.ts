import { TestBed } from '@angular/core/testing';

import { TrainerPostService } from './trainer-post.service';

describe('TrainerPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerPostService = TestBed.get(TrainerPostService);
    expect(service).toBeTruthy();
  });
});
