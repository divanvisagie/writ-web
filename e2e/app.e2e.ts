import { WritWebPage } from './app.po';

describe('writ-web App', function() {
  let page: WritWebPage;

  beforeEach(() => {
    page = new WritWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('writ-web works!');
  });
});
