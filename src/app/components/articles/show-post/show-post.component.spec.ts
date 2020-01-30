import { ArticlesService } from 'src/app/services/articles.service';
import { SearchPipe } from './../../../pipes/search.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowPostComponent } from './show-post.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ShowPostComponent', () => {
  let component: ShowPostComponent;
  let fixture: ComponentFixture<ShowPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule],
      declarations: [
        ShowPostComponent,
        SearchPipe
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        ArticlesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
