import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  moviesSearch: Movie[] = [];
  texto:string = '';

  constructor( private activatedRoute : ActivatedRoute,
              private peliculasService: PeliculasService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.texto = params.texto
      this.peliculasService.buscarPeliculas(this.texto)
      .subscribe( movies => this.moviesSearch = movies)
    } )

  }

}
