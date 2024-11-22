import { TestBed } from '@angular/core/testing';

import { SocialProfileService } from './social-profile.service';

describe('SocialProfileService', () => {
  let service: SocialProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
