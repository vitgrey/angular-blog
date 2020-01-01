import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { TableComponent } from './components/table/table.component';
import { SliderComponent } from './components/slider/slider.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'table', component: TableComponent },
  { path: 'slider', component: SliderComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
