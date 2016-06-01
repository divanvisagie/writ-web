export class WritWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('writ-web-app h1')).getText();
  }
}
