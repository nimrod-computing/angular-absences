import { TestBed, inject } from '@angular/core/testing';
import { AbsencesApiService } from "app/services/absences-api.service";


describe('HolidaysApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbsencesApiService]
    });
  });

  it('should ...', inject([AbsencesApiService], (service: AbsencesApiService) => {
    expect(service).toBeTruthy();
  }));
});
