import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title :string = 'app-music';
  
  albumEncours : string = "1";

  updateAlbumEncours ($event){
      this.albumEncours = $event;
  }

}
