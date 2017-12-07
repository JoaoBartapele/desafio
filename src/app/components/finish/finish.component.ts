import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  private vencedor: any;
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.vencedor = this.route.snapshot.params;
  }

}
