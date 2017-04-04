import { ImeeposAngularQqmapPage } from './app.po';

describe('imeepos-angular-qqmap App', () => {
  let page: ImeeposAngularQqmapPage;

  beforeEach(() => {
    page = new ImeeposAngularQqmapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
