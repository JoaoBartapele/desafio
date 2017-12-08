import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Teste de renderização', () => {
    it('— deve encontrar o nome do jogador', () => {
      const compiled = fixture.debugElement.queryAll(By.css('#name'))
      expect(compiled.length).toBe(2);
    });
    it('— deve encontrar o percentual de vida do jogador', () => {
      const compiled = fixture.debugElement.queryAll(By.css('#life'))
      expect(compiled.length).toBe(2);
    });
    it('— deve encontrar o nome do jogador', () => {
      const compiled = fixture.debugElement.queryAll(By.css('#lifebar'))
      expect(compiled.length).toBe(2);
    });
    it('— deve encontrar o nome do jogador', () => {
      const compiled = fixture.debugElement.queryAll(By.css('#btnAttack'))
      expect(compiled.length).toBe(2);
    });
  });

  describe('Teste funcionalidade', () => {
    it('— deve encontrar o nome do jogador "Teste"', () => {
      component.p1.name = 'Teste';
      fixture.detectChanges();
      const compiled = fixture.debugElement.query(By.css('#name'));
      expect(compiled.nativeElement.innerHTML.trim()).toBe('Teste');
    });
    it('— deve atualizar a barra de vida', () => {
      component.p1.life = 50;
      fixture.detectChanges();
      const compiled = fixture.debugElement.query(By.css('#lifebar'));
      expect(compiled.nativeElement.style['width']).toBe('50%');
    });
    it('— deve encontrar a vida do jogador', () => {
      component.p1.life = 50;
      fixture.detectChanges();
      const compiled = fixture.debugElement.query(By.css('#life'));
      expect(compiled.nativeElement.innerHTML.trim()).toBe('Vida: 50%');
    });
    it('— deve atualizar a barra de vida para danger', () => {
      component.p1.life = 40;
      fixture.detectChanges();
      const compiled = fixture.debugElement.query(By.css('#lifebar'));
      expect(compiled.nativeElement.className).toContain('bg-danger');
    });
    it('— deve atacar', () => {
      const compiled = fixture.debugElement.query(By.css('#btnAttack'));
      compiled.nativeElement.click();
      fixture.detectChanges();
      expect(component.p2.life).toBe(80);
    });
    it('— deve vencer o advesário', () => {
      const compiled = fixture.debugElement.query(By.css('#btnAttack'));
      compiled.nativeElement.click();
      compiled.nativeElement.click();
      compiled.nativeElement.click();
      compiled.nativeElement.click();
      compiled.nativeElement.click();
      fixture.detectChanges();
      expect(component.p2.life).toBe(0);
    });
  });
});
