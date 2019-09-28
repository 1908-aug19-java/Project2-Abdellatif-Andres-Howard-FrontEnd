import { TestBed } from '@angular/core/testing';

import { PokemonGetService } from './pokemon-get.service';

describe('PokemonGetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonGetService = TestBed.get(PokemonGetService);
    expect(service).toBeTruthy();
  });
});
