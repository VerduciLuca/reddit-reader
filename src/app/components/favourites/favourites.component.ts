import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit{
  favs: Post[] = []
  constructor(public storage:StorageService){
    // if (localStorage.getItem('favourites')) {
    //   this.favs = JSON.parse(localStorage.getItem('favourites')!)
    // }
  }
  ngOnInit(): void {
    this.storage.favouritesSubject.subscribe(arrayOfFavourites => {
    this.favs = arrayOfFavourites
    this.favs.sort((f1,f2) => f2.created - f1.created)
  })
  }


}
