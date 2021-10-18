import { TestBed } from '@angular/core/testing';

import { ArtClassService } from './art-class.service';

describe('ArtClassService', () => {
  let service: ArtClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
