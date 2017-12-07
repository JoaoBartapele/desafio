import { StartComponent } from './components/start/start.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { FinishComponent } from './components/finish/finish.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'game/resultado',
    component: FinishComponent
  },
  {
    path: '**',
    redirectTo: '/start',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
