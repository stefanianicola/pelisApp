import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';


@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.scss']
})
export class PeliculasPosterGridComponent implements OnInit {
  @Input() movies: Movie[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  MovieClick( movie: Movie ) {
    this.router.navigate(['/pelicula', movie.id])
  }

}
