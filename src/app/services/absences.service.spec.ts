import { TestBed, inject } from '@angular/core/testing';

import { AbsencesService } from './absences.service';

describe('AbsencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbsencesService]
    });
  });

  it('should ...', inject([AbsencesService], (service: AbsencesService) => {
    expect(service).toBeTruthy();
  }));
});
