import { ArticlesModel } from 'src/app/models/article';
import { Injectable } from '@angular/core';
import { EXAMPLE } from './example-data';

@Injectable()
export class ArticlesService {

  public articles: ArticlesModel[] = [];
  public example = EXAMPLE;

  constructor() { }

  getAllArticles(): ArticlesModel[] {
    if (localStorage.getItem('localData') !== null) {
      this.articles = JSON.parse(localStorage.getItem('localData'));
    } else {
      localStorage.setItem('localData', JSON.stringify(this.example));
      this.articles = JSON.parse(localStorage.getItem('localData'));
    }
    return this.articles;
  }

  getArticleById(id: number): ArticlesModel {
    const articleArray = JSON.parse(localStorage.getItem('localData'));
    return articleArray
      .filter(article => article.id === id)
      .pop();
  }

  updateArticleById(article): ArticlesModel {
    if (article.id === 0) {
      const articleArray = JSON.parse(localStorage.getItem('localData'));
      let articleId = articleArray.length;
      article.id = ++articleId;
      articleArray.push(article);
      localStorage.setItem('localData', JSON.stringify(articleArray));
    } else {
      const articleSaveArray = JSON.parse(localStorage.getItem('localData'));
      for (const i in articleSaveArray) {
        if (articleSaveArray[i].id === article.id) {
          articleSaveArray[i] = article;
          localStorage.setItem('localData', JSON.stringify(articleSaveArray));
        }
      }
    }
    return article;
  }

  deleteArticleDetail(id) {
    const articleArray = JSON.parse(localStorage.getItem('localData'));
    for (const i in articleArray) {
      if (articleArray[i].id === id) {
        articleArray.splice(i, 1);
        localStorage.setItem('localData', JSON.stringify(articleArray));
      }
    }
  }

}
