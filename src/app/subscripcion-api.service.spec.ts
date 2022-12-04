import { TestBed } from '@angular/core/testing';

import { SubscripcionAPIService } from './subscripcion-api.service';

describe('SubscripcionAPIService', () => {
  let service: SubscripcionAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscripcionAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
