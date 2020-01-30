import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArticlesService } from './articles.service';
import { TestBed } from '@angular/core/testing';

describe('ArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ArticlesService]
  }));

  it('should be created', () => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    expect(service).toBeTruthy();
  });
});
