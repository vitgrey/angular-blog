import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { ChangePostComponent } from './change-post.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChangePostComponent', () => {
  let component: ChangePostComponent;
  let fixture: ComponentFixture<ChangePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule],
      declarations: [ChangePostComponent],
      providers: [ArticlesService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
