import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class StartGuard implements CanActivate {

  constructor(
    private router: Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
      if(next.routeConfig.path === 'game'){
        if(!next.queryParams.jogador1 && !next.queryParams.jogador2){
          this.router.navigate(['/start']);
        }
      } else if(next.routeConfig.path ==='game/resultado'){
      if(!next.params.name && !next.params.life) {
        this.router.navigate(['/start']);
      }
    }
    return true;
  }
}
