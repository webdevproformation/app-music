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

  findAlbumComplet<T>(id: string){
    let album = this.find( id); 
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
