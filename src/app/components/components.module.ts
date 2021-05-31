import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [NavbarComponent, 
                SliderComponent, 
                PeliculasPosterGridComponent],
  exports: [
    NavbarComponent,
    SliderComponent,
    PeliculasPosterGridComponent,
    RatingModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule
  ]
})
export class ComponentsModule { }
