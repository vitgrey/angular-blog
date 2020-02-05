import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArticlesService } from './articles.service';
import { TestBed } from '@angular/core/testing';
import { ArticlesModel } from 'src/app/models/article';

describe('ArticlesService', () => {

  const testForm: ArticlesModel[] = [
    {
      id: 2,
      title: 'Great Britain',
      content: `The United Kingdom of Great Britain and Northern Ireland is situated on the British Isles.
        They lie to the north-west of Europe. The British Isles are separated from the continent by the narrow
        strait of water which is called the English Channel.
        The United Kingdom consists of four parts: England, Scotland, Wales and Northern Ireland.England,
        the central part, occupies the most of the island of Great Britain.To the north lies Scotland and
        to the west the third part of the country, Wales, is situated.The fourth part is called Northern
        Ireland and is located on the second island.Each part has its capital.The capital of England
        is London, Wales has Cardiff, Scotland has Edinburgh and the main city of Northern Ireland
        is Belfast.
        Great Britain is a country of forests and plains.There are no high mountains in this country.Scotland
        is the most mountainous region with the highest peak, Ben Nevis.The rivers of Great Britain are not
        long.The longest rivers are the Thames and the Severn.The capital of the United Kingdom, London,
        stands on the banks of the Thames.As the country is surrounded by many seas there are some great
        ports at the seaside: London, Glasgow, Plymouth and others.
        Wales is a country of lakes.
        Seas and oceans influence the British climate which is not too cold in winter but never hot in summer.
        Great Britain is a beautiful country with old traditions and good people.`,
      source: '../../assets/third.jpeg'
    },
    {
      id: 5,
      title: 'Great Britain',
      content: `The United Kingdom of Great Britain and Northern Ireland is situated on the British Isles.`,
      source: '../../assets/third.jpeg'
    }
  ];

  let service: ArticlesService;


  beforeEach(() => {
    service = new ArticlesService();
  });

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ArticlesService]
  }));

  it('should be created', () => {
    const serviceArticle: ArticlesService = TestBed.get(ArticlesService);
    expect(serviceArticle).toBeTruthy();
  });

  describe('#getArticleById', () => {

    it('should return `null` if it does NOT find a form matching the provided ID', () => {
      expect(service.getArticleById(10)).toBe(undefined);
      expect(service.getArticleById(null)).toBe(undefined);
    });
  });

});
