import { Ng2MaterialAdminPage } from './app.po';

describe('ng2-material-admin App', () => {
  let page: Ng2MaterialAdminPage;

  beforeEach(() => {
    page = new Ng2MaterialAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
