describe('Login na Riachuelo', () => {
  it('Deve fazer login com sucesso', () => {
    // Visite a página de login da Riachuelo
    cy.visit('https://www.riachuelo.com.br/login');

    // Preencha o campo de e-mail
    cy.get('input[name="email"]').type('seu-email@example.com');

    // Preencha o campo de senha
    cy.get('input[name="password"]').type('sua-senha');

    // Clique no botão de login
    cy.get('button[type="submit"]').click();

    // Verifique se o login foi bem-sucedido
    // (Isso pode variar dependendo do que você espera após o login)
    cy.url().should('include', '/home'); // Ajuste a URL de acordo com o comportamento esperado
    cy.get('.welcome-message').should('contain', 'Bem-vindo');
  });
});
