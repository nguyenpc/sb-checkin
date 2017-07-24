import { SbParticipantPage } from './app.po';

describe('sb-participant App', () => {
  let page: SbParticipantPage;

  beforeEach(() => {
    page = new SbParticipantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
