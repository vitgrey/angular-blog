import { ArticlesModel } from './../../models/article.model';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {

  let service: ArticlesService;
  const articleMock: ArticlesModel[] = [
    {
      id: 2,
      title: 'Great Britain',
      content: `The United Kingdom of Great Britain and Northern Ireland is situated on the British Isles.`,
      source: '../../assets/third.jpeg'
    },
    {
      id: 5,
      title: 'Great Britain1',
      content: `The United Kingdom of Great Britain and Northern Ireland is situated on the British Isles.1`,
      source: '../../assets/third1.jpeg'
    }
  ];

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ArticlesService]
  }));

  it('should be created', () => {
    const serviceArticle: ArticlesService = TestBed.get(ArticlesService);
    expect(serviceArticle).toBeTruthy();
  });

  it('should return `null` if it does NOT find a form matching the provided ID', () => {
    service = TestBed.get(ArticlesService);
    expect(service.getArticleById(10)).toBe(undefined);
    expect(service.getArticleById(null)).toBe(undefined);
  });

});
