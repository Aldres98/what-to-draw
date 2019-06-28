import { TestBed } from '@angular/core/testing';

import { RandomCharacterService } from './random-character.service';

describe('RandomCharacterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomCharacterService = TestBed.get(RandomCharacterService);
    expect(service).toBeTruthy();
  });
});
