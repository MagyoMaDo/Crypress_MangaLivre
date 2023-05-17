describe('Teste no Manga Livre', () => {
  it('Verifica se o site Manga Livre está acessível', () => {
    cy.visit('https://mangalivre.net/');
    cy.contains('Manga Livre');
  });
});
