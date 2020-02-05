import { Component, OnInit } from '@angular/core';
import { CarouselModelData } from './carousel-data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public sources = new CarouselModelData();
  constructor() {
   }

  ngOnInit() {
  }

}
