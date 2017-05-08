import { StaffHolidaysPage } from './app.po';

describe('staff-holidays App', () => {
  let page: StaffHolidaysPage;

  beforeEach(() => {
    page = new StaffHolidaysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
