describe('Selecionar um produto no site da Riachuelo', () => {
  it('Deve permitir selecionar um produto e adicionar ao carrinho', () => {
    // Acesse a página inicial da Riachuelo
    cy.visit('https://www.riachuelo.com.br/');

    // Pesquise um produto (por exemplo, "camisa")
    cy.get('input[name="search"]').type('camisa{enter}');

    // Selecione o primeiro produto da lista de resultados
    cy.get('.product-item').first().click();

    // Verifique se a página do produto foi carregada
    cy.url().should('include', '/produto/');

    // Adicione o produto ao carrinho
    cy.get('button[data-testid="add-to-cart-button"]').click();

    // Verifique se o produto foi adicionado ao carrinho
    cy.get('a[href="/carrinho"]').click();
    cy.get('.cart-item').should('have.length.greaterThan', 0);
  });
});
