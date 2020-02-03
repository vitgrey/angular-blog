import { ChangePostComponent } from './../change-post/change-post.component';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { SearchPipe } from './../../../pipes/search.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { ShowPostComponent } from './show-post.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';

describe('ShowPostComponent', () => {
  let component: ShowPostComponent;
  let fixture: ComponentFixture<ShowPostComponent>;
  let de: DebugElement;
  let el: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        ReactiveFormsModule,
        BrowserModule
      ],
      declarations: [
        ShowPostComponent,
        SearchPipe,
        ChangePostComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ArticlesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPostComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('div'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call method onClickReadArticle', () => {
    fixture.detectChanges();
    spyOn<any>(component, 'onClickReadArticle');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onClickReadArticle).toHaveBeenCalledTimes(0);
  });

  it('should call method onClickEditArticleDetail', () => {
    fixture.detectChanges();
    spyOn<any>(component, 'onClickEditArticleDetail');
    el = fixture.debugElement.query(By.css('i')).nativeElement;
    el.click();
    expect(component.onClickEditArticleDetail).toHaveBeenCalledTimes(1);
  });

  it('should contain "Add"', () => {
    const infoMessageEl: HTMLElement = fixture.nativeElement;
    const button = infoMessageEl.querySelector('button');
    expect(button.textContent).toContain('Add');
  });

});
