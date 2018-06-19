import { TestBed, inject } from '@angular/core/testing';

import { GalaxyBackgroundService } from './galaxy-background.service';

describe('GalaxyBackgroundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalaxyBackgroundService]
    });
  });

  it('should be created', inject([GalaxyBackgroundService], (service: GalaxyBackgroundService) => {
    expect(service).toBeTruthy();
  }));
});
