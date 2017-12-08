import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';
import { ElementFinder } from 'protractor/built/element';

describe('desafio App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deve encontrar a página incial', async() => {
    page.navigateTo();
    expect(page.getCurrentUrl()).toBe(browser.baseUrl + '/start');
  });
  it('deve clicar no botão desabilitado e não redirecionar', () => {
    const btn = page.getBtnInicia();
    btn.click();
    expect(page.getCurrentUrl()).toBe(browser.baseUrl + '/start');
  });

  it('deve prencher os jogadores e clicar no botão, assim redirecionando para o jogo', () => {
    const a = page.getInpJ1();
    const b = page.getInpJ2();
    const btn = page.getBtnInicia();
    a.sendKeys('teste1');
    b.sendKeys('teste2');
    btn.click();

    expect(page.getCurrentUrl()).toContain('/game');
  });

  it('deve atacar e continuar no jogo', () => {
    const btn = page.getBtnAttack();
    btn.click();

    expect(page.getCurrentUrl()).toContain('/game');
  });

  it('deve reiniciar a partida', () => {
    const btn = page.getBtnReinicia();
    btn.click();
    browser.controlFlow();
    const life:ElementFinder = page.getLifeNumber();
    expect(life.getText()).toBe('Vida: 100%');
  });

  it('deve atacar até a vida do adversário chegar em 0 e assim redirecionar para o resultado', () => {
    const btn = page.getBtnAttack();
    btn.click();
    btn.click();
    btn.click();
    btn.click();
    btn.click();

    expect(page.getCurrentUrl()).toContain('/game/resultado');
  });

  it('deve selecionar a opção alterar jogadores', () =>{
    const btn = page.getBtnAlteraNomes();
    btn.click();

    expect(page.getCurrentUrl()).toBe(browser.baseUrl + '/start');
  });

  it('deve testar o guarda de rotas', () => {
    browser.get('/game');
    expect(page.getCurrentUrl()).toBe(browser.baseUrl + '/start');
    browser.get('/resultado');
    expect(page.getCurrentUrl()).toBe(browser.baseUrl + '/start');
  });

});
