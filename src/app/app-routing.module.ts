import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { TableComponent } from './components/table/table.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ShowListComponent } from './components/list/show-list/show-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'table', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'carousel', component: CarouselComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ShowListComponent, canActivate: [AuthGuard] },
  {
    path: 'show-post',
    loadChildren: () => import('./components/articles/show-post/show-post.module').then(mod => mod.ArticleShowModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'change-post',
    loadChildren: () => import('./components/articles/change-post/change-post.module').then(mod => mod.ArticleChangeModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
