import { TestBed } from '@angular/core/testing';

import { ViewVenueService } from './view-venue.service';

describe('ViewVenueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewVenueService = TestBed.get(ViewVenueService);
    expect(service).toBeTruthy();
  });
});
