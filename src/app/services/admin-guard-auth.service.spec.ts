import { TestBed } from '@angular/core/testing';

import { AdminGuardAuthService } from './admin-guard-auth.service';

describe('AdminGuardAuthService', () => {
  let service: AdminGuardAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGuardAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
