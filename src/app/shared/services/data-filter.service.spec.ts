import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DataFilterService } from './data-filter.service';

describe('DataFilterService', () => {
  let service: DataFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
    });
    service = TestBed.inject(DataFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have setFilterString method', () => {
    const service: DataFilterService = TestBed.get(DataFilterService);
    expect(service.setFilterString).toBeTruthy();
  });

  it('should have  getFilterString method', () => {
    const service: DataFilterService = TestBed.get(DataFilterService);
    expect(service.getFilterString).toBeTruthy();
  });
});
