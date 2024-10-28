import { TestBed } from '@angular/core/testing';

import { RickmortydbService } from './rickmortydb.service';

describe('RickmortydbService', () => {
  let service: RickmortydbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickmortydbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
