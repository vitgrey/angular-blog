import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { TableComponent } from './components/table/table.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'table', component: TableComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'list', component: ListComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
