Feature: Adicionar produtos ao carrinho no site da Riachuelo

  Background:
    Dado que o cliente está na página inicial do site da Riachuelo

  Scenario: Adicionar um único produto ao carrinho
    Quando o cliente buscar por "camiseta masculina"
    E selecionar o primeiro produto da lista
    E escolher um tamanho disponível
    E adicionar o produto ao carrinho
    Então o carrinho deve exibir o produto "camiseta masculina"

  Scenario: Adicionar produtos repetidos ao carrinho
    Quando o cliente buscar por "camiseta masculina"
    E selecionar o primeiro produto da lista
    E escolher um tamanho disponível
    E adicionar o produto ao carrinho duas vezes
    Então o carrinho deve exibir o produto "camiseta masculina" com a quantidade 2

  Scenario: Tentar adicionar um produto sem selecionar o tamanho
    Quando o cliente buscar por "camiseta masculina"
    E selecionar o primeiro produto da lista
    E tentar adicionar o produto ao carrinho sem selecionar o tamanho
    Então o site deve exibir uma mensagem de erro "Por favor, selecione um tamanho."
