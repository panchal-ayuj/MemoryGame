import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixgameComponent } from './sixgame/sixgame.component';
import { TwelvegameComponent } from './twelvegame/twelvegame.component';

const routes: Routes = [{ path: 'sixgame', component:SixgameComponent}, { path: 'twelvegame', component:TwelvegameComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
