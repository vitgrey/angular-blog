import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { ChangePostComponent } from './change-post.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

describe('ChangePostComponent', () => {
  let component: ChangePostComponent;
  let fixture: ComponentFixture<ChangePostComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserModule
      ],
      declarations: [ChangePostComponent],
      providers: [ArticlesService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePostComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    el = fixture.debugElement.query(By.css('form')).nativeElement;
    component.onArticleSubmitForm(el);
    expect('test element').toEqual('test element');
  });

  it('should call submit method', () => {
    fixture.detectChanges();
    spyOn<any>(component, 'onArticleSubmitForm');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onArticleSubmitForm).toHaveBeenCalledTimes(1);
  });

  it('should contain "article"', () => {
    const infoMessageEl: HTMLElement = fixture.nativeElement;
    const legend = infoMessageEl.querySelector('legend');
    expect(legend.textContent).toContain('article');
  });
});
