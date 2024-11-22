import { TestBed } from '@angular/core/testing';

import { ApplicationblogService } from './applicationblog.service';

describe('ApplicationblogService', () => {
  let service: ApplicationblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
