import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have login method', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.login).toBeTruthy();
   });

   it('should have getToken method', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.getToken).toBeTruthy();
   });
});
