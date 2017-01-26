import { ZalboardPage } from './app.po';

describe('zalboard App', function() {
  let page: ZalboardPage;

  beforeEach(() => {
    page = new ZalboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
