import { IreneBookStoreManagerPage } from './app.po';

describe('irene-book-store-manager App', () => {
  let page: IreneBookStoreManagerPage;

  beforeEach(() => {
    page = new IreneBookStoreManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
