import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SixgameComponent } from './sixgame/sixgame.component';
import { TwelvegameComponent } from './twelvegame/twelvegame.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SixgameComponent,
    TwelvegameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
