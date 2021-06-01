import { MovieDetail } from './../../interfaces/movie-detail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Cast } from 'src/app/interfaces/credits';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  movie: MovieDetail;
  cast: Cast[];

  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
                private peliculasService: PeliculasService,
                private location: Location) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    this.peliculasService.getPeliculaDetalle(id)
      .subscribe( movie => {
        if(!movie) {
          this.router.navigateByUrl('/home');
          return;
        }
        this.movie = movie
      })

      this.peliculasService.getCast(id)
        .subscribe( cast => {
          console.log(cast)
          this.cast = cast;
        })
  }

  regresar(){
    this.location.back();
  }
}
