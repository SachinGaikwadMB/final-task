import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getAllMovies method', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getAllMovies).toBeTruthy();
   });

   it('should have  getMovieById method', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getMovieById).toBeTruthy();
   });

   it('should have  saveUser method', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.saveUser).toBeTruthy();
   });
});
