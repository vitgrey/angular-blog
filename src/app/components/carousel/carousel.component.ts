import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public sources: string[] = ["https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"]

  constructor() { }

  ngOnInit() {
  }

}
