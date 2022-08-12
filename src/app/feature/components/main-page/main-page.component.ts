import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  moviesData :any = [];
  
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllMovies().subscribe((res) => {
     this.moviesData = res;
    });

    
  }

}
