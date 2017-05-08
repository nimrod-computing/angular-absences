import { AbsencesPage } from './app.po';

describe('angular-absences App', () => {
  let page: AbsencesPage;

  beforeEach(() => {
    page = new AbsencesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
