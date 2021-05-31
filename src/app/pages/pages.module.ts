import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscadorComponent } from './buscador/buscador.component';
import {ComponentsModule} from '../components/components.module';



@NgModule({
  declarations: [HomeComponent, PeliculaComponent, BuscadorComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
