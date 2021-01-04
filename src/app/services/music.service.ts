import { Injectable } from '@angular/core';
import { ALBUMS , ALBUM_LISTS } from './mock-albums';
import { Album } from "./album";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  data :Array<any> ; 

  constructor() {
    this.data = ALBUMS;
  }

  add( data ){
    this.data.unshift( data );
    // la méthode add est finie
  }


  getAll<T>() : Array<Album>{
    return this.data;
  }

  find<T>( id:string ){
    return this.getAll().find( (item) => {
      return item.id === id ;
    } );
  }

  search<T>( motRecherche :string ){
    let resultat = [];
    let motRechercheMinuscule = motRecherche.toLocaleLowerCase();
    ALBUMS.forEach( function( item ){
      if( 
          item.name.toLocaleLowerCase().indexOf( motRechercheMinuscule ) !== -1  || 
          item.title.toLocaleLowerCase().indexOf( motRechercheMinuscule ) !== -1 || 
          item.description.toLocaleLowerCase().indexOf( motRechercheMinuscule ) !== -1 )
      {
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
