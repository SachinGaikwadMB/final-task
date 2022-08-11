import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TheatreSeatsComponent } from './theatre-seats/theatre-seats.component';
import { SubMainPageComponent } from './components/main-page/sub-main-page/sub-main-page.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent,
    MovieDetailsComponent,
    MainPageComponent,
    TheatreSeatsComponent,
    SubMainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
