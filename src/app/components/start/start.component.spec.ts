import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponent } from './start.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Teste de renderização', () => {
    it('— deve encontrar o Input do jogador 1', () => {
      const inpt = fixture.debugElement.query(By.css('#jogador1'));
      expect(inpt).toBeTruthy();
    });
    it('— deve encontrar o Input do jogador 2', () => {
      const inpt = fixture.debugElement.query(By.css('#jogador2'));
      expect(inpt).toBeTruthy();
    });
    it('— deve encontrar o botão de Iniciar', () => {
      const btn = fixture.debugElement.query(By.css('#btnInicia'));
      expect(btn).toBeTruthy();
    });
  });

  describe('Teste funcionalidades', () => {
    describe('Testes com o botão "Iniciar" e sua validação', () => {
      it('— jogador 1 e jogador 2 em branco', () => {
        component.nomesForm.get('jogador1').setValue('');
        component.nomesForm.get('jogador2').setValue('');
        fixture.detectChanges();

        const btn = fixture.debugElement.query(By.css('#btnInicia'));
        expect(btn.nativeElement.disabled).toBe(true);
      });
      it('— jogador 1 em branco', () => {
        component.nomesForm.get('jogador1').setValue('');
        component.nomesForm.get('jogador2').setValue('teste');
        fixture.detectChanges();

        const btn = fixture.debugElement.query(By.css('#btnInicia'));
        expect(btn.nativeElement.disabled).toBe(true);
      });
      it('— jogador 2 em branco', () => {
        component.nomesForm.get('jogador1').setValue('teste');
        component.nomesForm.get('jogador2').setValue('');
        fixture.detectChanges();

        const btn = fixture.debugElement.query(By.css('#btnInicia'));
        expect(btn.nativeElement.disabled).toBe(true);
      });
      it('— jogador 1 e jogador 2 preenchidos', () => {
        component.nomesForm.get('jogador1').setValue('teste');
        component.nomesForm.get('jogador2').setValue('teste');
        fixture.detectChanges();

        const btn = fixture.debugElement.query(By.css('#btnInicia'));
        expect(btn.nativeElement.disabled).toBe(false);
      });
    });
  });
});
