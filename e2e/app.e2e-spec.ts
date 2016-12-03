import { CodesPage } from './app.po';

describe('codes App', function() {
  let page: CodesPage;

  beforeEach(() => {
    page = new CodesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
