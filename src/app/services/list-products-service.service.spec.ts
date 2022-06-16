import { TestBed } from '@angular/core/testing';

import { ListProductsServiceService } from './list-products-service.service';

describe('ListProductsServiceService', () => {
  let service: ListProductsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListProductsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
