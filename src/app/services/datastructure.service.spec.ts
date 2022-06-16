import { TestBed } from '@angular/core/testing';

import { DatastructureService } from './datastructure.service';

describe('DatastructureService', () => {
  let service: DatastructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatastructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
