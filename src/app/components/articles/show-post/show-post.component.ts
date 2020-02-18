import { Component, OnInit } from '@angular/core';
import { ArticlesModel } from 'src/app/models/article.model';
import { ArticlesService } from 'src/app/services/articles/articles.service';
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
    this.articles = this.articlesService.getAllArticles();
  }

  public onChangePage(articles): void {
    this.articles = articles;
  }

  public onClickEditArticleDetail(id): void {
    this.router.navigate(['/change-post'], { queryParams: { id } });
  }

  public onClickArticleDelete(id): void {
    this.articlesService.deleteArticleDetail(id);
    this.articles = this.articlesService.getAllArticles();
  }

  public onClickAddArticle(): void {
    this.router.navigate(['/change-post']);
  }

  public onClickReadArticle(id): void {
    this.articleId = id;
    this.articleDetail = this.articlesService.getArticleById(parseInt(this.articleId, 10));
  }

}
