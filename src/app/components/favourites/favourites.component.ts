import { Component } from '@angular/core';
import { Post } from 'src/app/model/post';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
  favs: Post[] = []
  constructor(public storage:StorageService){
    if (localStorage.getItem('favourites')) {
      this.favs = JSON.parse(localStorage.getItem('favourites')!)
    }
  }


}
