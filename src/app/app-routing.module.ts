import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

const routes: Routes = [
  {path:'home', component:ListComponent},
  {path:'favourites', component:FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
