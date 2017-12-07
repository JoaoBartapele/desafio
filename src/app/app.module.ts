import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './components/start/start.component';
import { FinishComponent } from './components/finish/finish.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StartComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
