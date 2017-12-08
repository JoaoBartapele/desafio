import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../../models/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  host: {
    '(document: keydown)': 'keyEvent($event)'
  }
})
export class GameComponent implements OnInit {

  public p1: Player = new Player();
  public p2: Player = new Player();
  private players: Player[];

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((param)=>{
      this.p1.name = param['jogador1'];
      this.p2.name = param['jogador2'];
    });
    this.players = [this.p1,this.p2];
  }

  private attack(j: Player): void {
    this.players.indexOf(j) === 0? this.players[1].life -= 20: this.players[0].life -= 20;
    if(this.p1.life === 0) this.router.navigate(['game/resultado', this.p2]);
    else if(this.p2.life === 0) this.router.navigate(['game/resultado', this.p1]);
  }

  private resetGame(): void {
    this.players.forEach((p) => p.life = 100);
 }

  public keyEvent(e: KeyboardEvent): void {
    if(e.code === 'KeyL') this.attack(this.p2);
    else if(e.code === 'KeyS') this.attack(this.p1);
    this.cdr.detectChanges();
  }
}
