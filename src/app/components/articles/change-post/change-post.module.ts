import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChangePostRoutingModule } from './change-post-routing.module';
import { ChangePostComponent } from './change-post.component';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChangePostRoutingModule
  ],
  exports: [ChangePostComponent],
  declarations: [ChangePostComponent],
  providers: [ArticlesService]
})

export class ArticleChangeModule { }
