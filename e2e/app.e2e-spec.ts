import { AppPage } from './app.po';

describe('log-yourself App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Oops, we didn\'t quite find what you are looking for.');
  });
});
