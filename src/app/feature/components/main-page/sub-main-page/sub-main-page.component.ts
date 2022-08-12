import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-main-page',
  templateUrl: './sub-main-page.component.html',
  styleUrls: ['./sub-main-page.component.scss']
})
export class SubMainPageComponent implements OnInit {

 @Input() moviesData : any = [];
 @Input() playsData  : any = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
