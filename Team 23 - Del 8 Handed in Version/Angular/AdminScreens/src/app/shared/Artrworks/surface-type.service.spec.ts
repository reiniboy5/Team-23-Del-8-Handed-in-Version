import { TestBed } from '@angular/core/testing';

import { SurfaceTypeService } from './surface-type.service';

describe('SurfaceTypeService', () => {
  let service: SurfaceTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurfaceTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
