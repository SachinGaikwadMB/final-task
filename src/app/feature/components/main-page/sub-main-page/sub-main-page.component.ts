import { Component, Input, OnInit } from '@angular/core';
import { DataFilterService } from 'src/app/shared/services/data-filter.service';

@Component({
  selector: 'app-sub-main-page',
  templateUrl: './sub-main-page.component.html',
  styleUrls: ['./sub-main-page.component.scss']
})
export class SubMainPageComponent implements OnInit {

 @Input() moviesData: any = [];
 filteredString: any = 'all';

  
  constructor(private dataFilterService : DataFilterService) { }

  ngOnInit(): void {
    this.dataFilterService.getFilterString().subscribe((resp) => {
      this.filteredString = resp;
            console.log(this.moviesData);
            
    });
  }

}
