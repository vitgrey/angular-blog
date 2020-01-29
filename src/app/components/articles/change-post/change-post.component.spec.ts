import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesService } from 'src/app/services/articles.service';
import { ChangePostComponent } from './change-post.component';
import { FormsModule } from '@angular/forms';

describe('ChangePostComponent', () => {
  let component: ChangePostComponent;
  let fixture: ComponentFixture<ChangePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ChangePostComponent ],
      providers: [ArticlesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
