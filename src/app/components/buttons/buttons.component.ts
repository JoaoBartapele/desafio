import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <div class="row">
      <div class="col-6 mx-auto text-center">
        <button
          id="btnReinicia"
          class="btn btn-dark"
          (click)="reinicia()"
        >
          Reiniciar
        </button>
        <button
          id="btnAlterarJogadores"
          class="btn btn-dark"
          (click)="start()"
        >
          Alterar Jogadores
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Output()
  private emitComand: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  private reinicia(): void{
    this.emitComand.emit(null);
  }
  private start(): void {
    this.router.navigate(['/start']);
  }

}
