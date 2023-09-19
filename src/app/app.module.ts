//moduli di angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

//componenti creati
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { CardComponent } from './components/card/card.component';
import { TimestampToDatePipe } from './pipes/timestamp-to-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    FavouritesComponent,
    CardComponent,
    TimestampToDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
