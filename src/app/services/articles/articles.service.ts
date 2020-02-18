import { ArticlesModel } from 'src/app/models/article.model';
import { Injectable } from '@angular/core';
import { EXAMPLE } from './example-data';

@Injectable()
export class ArticlesService {

  public articles: ArticlesModel[] = [];
  public example = EXAMPLE;

  constructor() { }

  public getAllArticles(): ArticlesModel[] {
    const factor = localStorage.getItem('localData');
    const getArticle = JSON.parse(localStorage.getItem('localData'));
    if (factor) {
      this.articles = getArticle;
    } else {
      localStorage.setItem('localData', JSON.stringify(this.example));
      this.articles = getArticle;
    }
    return this.articles;
  }

  public getArticleById(id: number): ArticlesModel {
    const articleArray = JSON.parse(localStorage.getItem('localData'));
    return articleArray
      .find(article => article.id === id);
  }

  public updateArticleById(article): ArticlesModel {
    const articleArrayGet = JSON.parse(localStorage.getItem('localData'));
    if (!article.id) {
      let articleId = articleArrayGet.length;
      article.id = ++articleId;
      articleArrayGet.push(article);
      localStorage.setItem('localData', JSON.stringify(articleArrayGet));
    } else {
      for (const i in articleArrayGet) {
        if (articleArrayGet[i].id === article.id) {
          articleArrayGet[i] = article;
          localStorage.setItem('localData', JSON.stringify(articleArrayGet));
        }
      }
    }
    return article;
  }

  public deleteArticleDetail(id): void {
    const articleArray = JSON.parse(localStorage.getItem('localData'));
    for (const i in articleArray) {
      if (articleArray[i].id === id) {
        articleArray.splice(i, 1);
        localStorage.setItem('localData', JSON.stringify(articleArray));
      }
    }
  }

}
