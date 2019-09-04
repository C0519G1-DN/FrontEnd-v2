import { TestBed } from '@angular/core/testing';

import { UploadSongService } from './upload-song.service';

describe('UploadSongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadSongService = TestBed.get(UploadSongService);
    expect(service).toBeTruthy();
  });
});
