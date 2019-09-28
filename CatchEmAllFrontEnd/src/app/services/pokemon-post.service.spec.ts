import { TestBed } from '@angular/core/testing';

import { PokemonPostService } from './pokemon-post.service';

describe('PokemonPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonPostService = TestBed.get(PokemonPostService);
    expect(service).toBeTruthy();
  });
});
