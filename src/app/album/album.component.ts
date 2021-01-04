import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MusicService } from "../services/music.service";
import { Album } from './../services/album';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  album : Album;
  constructor( private _activeRoute : ActivatedRoute , private _music : MusicService ) { }
  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe( ( reponse )=> {
      //console.log( reponse.get("id"));
      let album = this._music.find( reponse.get("id")  );
      //console.log(album);
      this.album = album;
    } )
  }

}
