import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataFilterService {
  filterString = new Subject();

  constructor() {}

  setFilterString(filterValue: string) {
    this.filterString.next(filterValue);
  }

  getFilterString() {
    return this.filterString.asObservable();
  }
}
