import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishComponent } from './finish.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('FinishComponent', () => {
  let component: FinishComponent;
  let fixture: ComponentFixture<FinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishComponent ],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Teste de renderização', () => {
    it('— deve encontrar a mensagem de "Fim de jogo"', () => {
      const msg = fixture.debugElement.query(By.css('#titulo span'));
      expect(msg.nativeElement.innerHTML.trim()).toBe('FIM DE JOGO!');
    });
    it('— deve encontrar a mensagem ddo vencedor', () => {
      const msg = fixture.debugElement.query(By.css('#mensagem span'));
      expect(msg.nativeElement.innerHTML.trim()).toContain('foi o vencedor com');
    });
  });
});
