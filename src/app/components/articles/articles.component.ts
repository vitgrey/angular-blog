import { Component, OnInit } from '@angular/core';
import { ARTICLES } from './article-data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public articles = ARTICLES;
  constructor() { }

  ngOnInit() {
  }

}
