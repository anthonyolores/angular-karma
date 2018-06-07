import { TestBed, inject } from '@angular/core/testing';

import { UnitTestService } from './unit-test.service';

describe('UnitTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitTestService]
    });
  });

  it('should be created', inject([UnitTestService], (service: UnitTestService) => {
    expect(service).toBeTruthy(); 
  }));

  it('check if theres isNull function', inject([UnitTestService],(service: UnitTestService) => {
    expect(service.isNull).toBeTruthy(); //function exists
  }));

  it('check if null', inject([UnitTestService],(service: UnitTestService) => {
    expect(service.isNull(null)).toBe(true);
  }));

  it('check if not null', inject([UnitTestService],(service: UnitTestService) => {
    expect(service.isNull('not null')).toBe(false);
  }));
});
