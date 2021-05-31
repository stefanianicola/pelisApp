import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[];

  mySwiper : Swiper;

  constructor() { }
  

  ngAfterViewInit(): void {
   this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  ngOnInit(): void {
    console.log(this.movies)
  }

  onSlideNext():void{
    this.mySwiper.slideNext();
  }
  onSlidePrev():void {
    this.mySwiper.slidePrev();
  }

}
