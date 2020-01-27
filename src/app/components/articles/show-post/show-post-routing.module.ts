import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPostComponent } from './show-post.component';

const routes: Routes = [
  {
    path: '', component: ShowPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShowPostRoutingModule { }
