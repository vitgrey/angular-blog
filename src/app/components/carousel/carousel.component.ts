import { Component, OnInit } from '@angular/core';
import { CAROUSEL } from './carousel-data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public sources = CAROUSEL;

  constructor() { }

  ngOnInit() {
  }

}
