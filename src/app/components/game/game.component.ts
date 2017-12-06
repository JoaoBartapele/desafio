import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private j1 = {
    name: 'Jogador 1',
    life: 100
  }
  private j2 = {
    name: 'Jogador 1',
    life: 100
  }

  constructor() { }

  ngOnInit() {
  }

}
