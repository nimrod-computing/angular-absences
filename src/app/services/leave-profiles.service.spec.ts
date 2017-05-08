import { TestBed, inject } from '@angular/core/testing';

import { LeaveProfilesService } from './leave-profiles.service';

describe('LeaveProfilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveProfilesService]
    });
  });

  it('should ...', inject([LeaveProfilesService], (service: LeaveProfilesService) => {
    expect(service).toBeTruthy();
  }));
});
