import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { SliderComponent } from './components/slider/slider.component';
import { LineComponent } from './components/line/line.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ArticlesComponent,
    NavComponent,
    FooterComponent,
    TableComponent,
    SliderComponent,
    LineComponent,
    DoughnutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
