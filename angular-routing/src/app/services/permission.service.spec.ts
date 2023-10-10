import { TestBed, inject } from '@angular/core/testing';

import { PermissionService } from './permission.service';

describe('LoadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionService]
    });
  });

  it('should ...', inject([PermissionService], (guard: PermissionService) => {
    expect(guard).toBeTruthy();
  }));
});
