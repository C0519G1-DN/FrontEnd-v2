import { TestBed } from '@angular/core/testing';

import { JwtStorageService } from './jwt-storage.service';

describe('JwtStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtStorageService = TestBed.get(JwtStorageService);
    expect(service).toBeTruthy();
  });
});
