import { Component, OnInit } from '@angular/core';
import { ArticlesModel } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {

  public search: any = '';
  public articles: ArticlesModel[] = [];
  public articleId: string;
  public articleDetail = {} as ArticlesModel;
  public items = [];

  constructor(private articlesService: ArticlesService, private router: Router) { }

  ngOnInit() {
    this.items = this.articlesService.getAllArticles();
    this.loadAllArticleList();
  }

  onChangePage(articles) {
    this.articles = articles;
  }

  loadAllArticleList() {
    this.articles = this.articlesService.getAllArticles();
  }

  onClickEditArticleDetail(id) {
    this.router.navigate(['/change-post'], { queryParams: { id } });
  }

  onClickArticleDelete(id) {
    this.articlesService.deleteArticleDetail(id);
    this.loadAllArticleList();
  }

  onClickAddArticle() {
    this.router.navigate(['/change-post']);
  }

  getArticleDetailById(id) {
    this.articleDetail = this.articlesService.getArticleById(parseInt(id, 10));
  }

  onClickReadArticle(id) {
    this.articleId = id;
    this.getArticleDetailById(this.articleId);
  }

}
