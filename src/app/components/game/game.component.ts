import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  host: {
    '(document: keydown)': 'keyEvent($event)'
  }
})
export class GameComponent implements OnInit {

  private j1 = {
    name: 'Jogador 1',
    life: 100
  };
  private j2 = {
    name: 'Jogador 2',
    life: 100
  };
  private players: any[];

  constructor(
    private cdr: ChangeDetectorRef,
    private route: Router
  ) {}

  ngOnInit() {
    this.players = [this.j1,this.j2];
  }

  private damage(j: any): void {
    this.players.indexOf(j) === 0? this.players[1].life -= 20: this.players[0].life -= 20;
    if(this.j1.life === 0) this.route.navigate(['game/resultado', this.j2]);
    else if(this.j2.life === 0) this.route.navigate(['game/resultado', this.j1]);
  }

  private checkLife(): boolean {
    return this.players.find((p) => p.life === 0 ? true : false);
  }

  private resetGame(): void {
     this.players.forEach((p) => p.life = 100);
  }

  public keyEvent(e: KeyboardEvent): void {
    if(e.code === 'NumpadEnter') this.damage(this.j2);
    else if(e.code === 'KeyS') this.damage(this.j1);
    this.cdr.detectChanges();
  }
}
