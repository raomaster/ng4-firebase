import { Ng4FirebasePage } from './app.po';

describe('ng4-firebase App', () => {
  let page: Ng4FirebasePage;

  beforeEach(() => {
    page = new Ng4FirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
