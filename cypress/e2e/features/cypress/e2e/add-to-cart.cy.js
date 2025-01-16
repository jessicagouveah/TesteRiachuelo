describe("Adicionar produtos ao carrinho no site da Riachuelo", () => {
  beforeEach(() => {
    cy.visit("/"); // Abre a página inicial
  });

  it("Deve adicionar um único produto ao carrinho", () => {
    cy.get('[data-testid="search-box-input"]').type("camiseta masculina");
    cy.get('[data-testid="search-box-button"]').click();
    cy.get('[data-testid="product-item"]').first().click();
    cy.get('[data-testid="size-selector"]').first().click();
    cy.get('[data-testid="add-to-cart"]').click();
    cy.get('[data-testid="cart"]').click();
    cy.contains("camiseta masculina").should("exist");
  });

  it("Deve adicionar produtos repetidos ao carrinho", () => {
    cy.get('[data-testid="search-box-input"]').type("camiseta masculina");
    cy.get('[data-testid="search-box-button"]').click();
    cy.get('[data-testid="product-item"]').first().click();
    cy.get('[data-testid="size-selector"]').first().click();
    cy.get('[data-testid="add-to-cart"]').click();
    cy.get('[data-testid="add-to-cart"]').click(); // Adiciona novamente
    cy.get('[data-testid="cart"]').click();
    cy.get('[data-testid="cart-item-quantity"]').should("contain", "2");
  });

  it("Deve exibir mensagem de erro ao tentar adicionar sem selecionar tamanho", () => {
    cy.get('[data-testid="search-box-input"]').type("camiseta masculina");
    cy.get('[data-testid="search-box-button"]').click();
    cy.get('[data-testid="product-item"]').first().click();
    cy.get('[data-testid="add-to-cart"]').click(); // Sem selecionar tamanho
    cy.contains("Por favor, selecione um tamanho.").should("be.visible");
  });
});
