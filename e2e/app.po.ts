import { browser, element, by } from 'protractor';

export class ImeeposAngularQqmapPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
