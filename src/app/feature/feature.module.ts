import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TheatreSeatsComponent } from './components/theatre-seats/theatre-seats.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SubMainPageComponent } from './components/main-page/sub-main-page/sub-main-page.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes : Routes = [
  {
    path:'', component:MainPageComponent
  },
  {
    path:'movies/:id', component:MovieDetailsComponent, canActivate:[AuthGuard]
  },
  {
    path:'seats', component:TheatreSeatsComponent
  }
]

@NgModule({
  declarations: [
    NavbarComponent,
    MovieDetailsComponent,
    MainPageComponent,
    TheatreSeatsComponent,
    FooterComponent,
    SubMainPageComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NavbarComponent,
    MainPageComponent,
    FooterComponent,
    SubMainPageComponent,
    FilterPipe
  ]
})
export class FeatureModule { }
