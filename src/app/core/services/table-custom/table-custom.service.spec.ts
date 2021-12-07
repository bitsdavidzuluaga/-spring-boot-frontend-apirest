import { TestBed } from '@angular/core/testing';

import { TableCustomService } from './table-custom.service';

describe('TableCustomService', () => {
  let service: TableCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
