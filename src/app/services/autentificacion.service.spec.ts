import { TestBed } from '@angular/core/testing';

import { AuthService } from 'src/app/services/autentificacion.service';

describe('AutentificacionService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
