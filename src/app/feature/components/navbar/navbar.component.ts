import { Component, OnInit } from '@angular/core';
import { DataFilterService } from 'src/app/shared/services/data-filter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private dataFilterService: DataFilterService) {}

  ngOnInit(): void {}

  setFilterString(filterValue: string) {
    this.dataFilterService.setFilterString(filterValue);
  }
}
