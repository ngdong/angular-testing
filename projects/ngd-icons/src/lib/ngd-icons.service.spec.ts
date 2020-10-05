import { TestBed } from '@angular/core/testing';

import { NgdIconsService } from './ngd-icons.service';

describe('NgdIconsService', () => {
  let service: NgdIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgdIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
