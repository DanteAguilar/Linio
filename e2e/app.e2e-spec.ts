import { LinioGithubPage } from './app.po';

describe('linio-github App', () => {
  let page: LinioGithubPage;

  beforeEach(() => {
    page = new LinioGithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
