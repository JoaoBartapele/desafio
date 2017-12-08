import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getBtnInicia() {
    return element(by.css('#btnInicia'));
  }

  getInpJ1() {
    return element(by.css('#jogador1'))
  }
  getInpJ2() {
    return element(by.css('#jogador2'))
  }

  getCurrentUrl() {
    return browser.getCurrentUrl().then();
  }

  getBtnAttack() {
    return element(by.css('#btnAttack'));
  }

  getLifeNumber() {
    return element(by.css('#life'));
  }

  getBtnReinicia() {
    return element(by.css('#btnReinicia'));
  }
  
  getBtnAlteraNomes() {
    return element(by.css('#btnAlterarJogadores'));
  }
}
