import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './components/start/start.component';
import { FinishComponent } from './components/finish/finish.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { StartGuard } from './guards/start.guard';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StartComponent,
    FinishComponent,
    InstructionsComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [StartGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
