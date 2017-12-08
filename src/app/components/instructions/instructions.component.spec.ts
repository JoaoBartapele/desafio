import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsComponent } from './instructions.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('InstructionsComponent', () => {
  let component: InstructionsComponent;
  let fixture: ComponentFixture<InstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Teste de renderização', () => {
    it('— deve encontrar o titulo das instruções', () => {
      const compiled = fixture.debugElement.query(By.css('#tituloIntruc'));
      expect(compiled).toBeTruthy();
    });
    it('— deve encontrar as 4 instruções', () => {
      const compiled = fixture.debugElement.queryAll(By.css('#instrucoes p'));
      expect(compiled.length).toBe(4);
    });
  });
});
