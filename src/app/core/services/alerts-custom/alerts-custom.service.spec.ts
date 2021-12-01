import { TestBed } from '@angular/core/testing';

import { AlertsCustomService } from './alerts-custom.service';

describe('AlertsCustomService', () => {
  let service: AlertsCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertsCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
