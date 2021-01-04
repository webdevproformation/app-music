import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlbumsComponent } from './albums/albums.component';
import { HeureminutePipe } from './heureminute.pipe';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SearchComponent } from './search/search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AlbumComponent } from './album/album.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PaginationComponent,
    SidebarComponent,
    AlbumsComponent,
    HeureminutePipe,
    HomeComponent,
    ConnexionComponent,
    SearchComponent,
    SearchFormComponent,
    AlbumComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule ,
    RouterModule.forRoot([
      {path : "" , component: HomeComponent },
      {path : "connexion" , component: ConnexionComponent},
      {path : "search/:key" , component:SearchComponent},
      {path : "album/:id" , component : AlbumComponent },
      {path : "**" , component: NotFoundComponent }
    ]),
    FormsModule
  ],
  providers: 
  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
