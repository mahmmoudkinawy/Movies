import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SliderComponent } from './components/slider/slider.component';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { ItemComponent } from './components/item/item.component';
import { MovieComponent } from './pages/movie/movie.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';

import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemsBannerComponent,
    ItemComponent,
    MovieComponent,
    VideoEmbedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PaginatorModule,
    TabViewModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
