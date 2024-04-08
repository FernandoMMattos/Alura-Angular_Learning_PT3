import { TestBed } from '@angular/core/testing';

import { UFService } from './uf.service';

describe('UFService', () => {
  let service: UFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
