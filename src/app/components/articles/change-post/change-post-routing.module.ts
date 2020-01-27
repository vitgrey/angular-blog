import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePostComponent } from './change-post.component';

const routes: Routes = [
  {
    path: '', component: ChangePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChangePostRoutingModule { }
