import { TestBed } from '@angular/core/testing';

import { BubblesortService } from './bubblesort.service';

describe('BubblesortService', () => {
  let service: BubblesortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BubblesortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
