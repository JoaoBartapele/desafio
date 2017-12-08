import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsComponent ],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Teste de renderização', () => {
    it(' — deve encontrar o botão de Reiniciar', () =>{
      const reiniciar = fixture.debugElement.query(By.css('#btnReinicia'));
      expect(reiniciar).toBeTruthy();
    });
    it(' — deve encontrar o texto no botão Reiniciar', () =>{
      const reiniciar = fixture.debugElement.query(By.css('#btnReinicia'));
      expect(reiniciar.nativeElement.innerHTML.trim()).toBe('Reiniciar');
    });
    it(' — deve encontrar o botão de Alterar Jogadores', () =>{
      const altera = fixture.debugElement.query(By.css('#btnAlterarJogadores'));
      expect(altera).toBeTruthy();
    });
    it(' — deve encontrar o texto no botão Alterar Jogadores', () =>{
      const altera = fixture.debugElement.query(By.css('#btnAlterarJogadores'));
      expect(altera.nativeElement.innerHTML.trim()).toBe('Alterar Jogadores');
    });
  });
});
