import { TestBed, async, inject } from '@angular/core/testing';

import { NewOneGuard } from './new-one.guard';

describe('NewOneGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewOneGuard]
    });
  });

  it('should ...', inject([NewOneGuard], (guard: NewOneGuard) => {
    expect(guard).toBeTruthy();
  }));
});
