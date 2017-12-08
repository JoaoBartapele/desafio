import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { Location } from '@angular/common';
import { Player } from '../../models/player';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  private vencedor: Player | Params;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.vencedor = this.route.snapshot.params;
  }
  private resetGame(): void {
    this.location.back();
  }

}
