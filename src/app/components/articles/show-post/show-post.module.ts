import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShowPostRoutingModule } from './show-post-routing.module';
import { ShowPostComponent } from './show-post.component';
import { ArticlesService } from 'src/app/services/articles.service';
import { SearchPipe } from './../../../pipes/search.pipe';
import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  imports: [
    CommonModule,
    ShowPostRoutingModule,
    FormsModule
  ],
  exports: [ShowPostComponent],
  declarations: [
    ShowPostComponent,
    SearchPipe,
    JwPaginationComponent
  ],
  providers: [ArticlesService]
})

export class ArticleShowModule { }
