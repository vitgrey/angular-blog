import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArticlesService } from './articles.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesModel } from 'src/app/models/article.model';

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticlesService]
    });

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);


    it('should be created', () => {
      service = TestBed.get(ArticlesService);
      expect(service).toBeTruthy();
    });

    it('should return `null` if it does NOT find a form matching the provided ID', () => {
      service = TestBed.get(ArticlesService);
      expect(service.getArticleById(10)).toBe(undefined);
      expect(service.getArticleById(null)).toBe(undefined);
    });
  });
});
