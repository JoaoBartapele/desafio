import { StartComponent } from './components/start/start.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { FinishComponent } from './components/finish/finish.component';
import { StartGuard } from './guards/start.guard';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'game',
    component: GameComponent,
    canActivate: [StartGuard]
  },
  {
    path: 'game/resultado',
    component: FinishComponent,
    canActivate: [StartGuard]
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
