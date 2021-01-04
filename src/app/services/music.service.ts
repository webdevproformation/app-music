import { Injectable } from '@angular/core';
import { ALBUMS , ALBUM_LISTS } from './mock-albums';
import { Album } from "./album";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  getAll<T>() : Array<Album>{
    return ALBUMS;
  }

  find<T>( id:string ){
    return this.getAll().find( (item) => {
      return item.id === id ;
    } );
  }

  search<T>( motRecherche :string ){
    let resultat = [];
    ALBUMS.forEach( function( item ){
      if( item.name.indexOf( motRecherche ) !== -1  || item.title.indexOf( motRecherche ) !== -1 || item.description.indexOf( motRecherche ) !== -1 ){
        resultat.push(item);
      }
    } );
    return resultat ;
  }

  findAlbumComplet<T>(id: string){
    let album = this.find( id ); 
    let albumComplet = {
      album : album,
      titres : []
    };
    let resultat = ALBUM_LISTS.find( (item) => {
      return item.id === id 
    } )

    if(resultat != undefined){
      albumComplet.titres = resultat.list ;
    }
    return albumComplet ; 
  }
}
