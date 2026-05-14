const produtos = [
  { nome: "Notebook", preco: 3500, categoria: "Eletrônicos" },
  { nome: "Mouse Gamer", preco: 150, categoria: "Eletrônicos" },
  { nome: "Cadeira Office", preco: 900, categoria: "Móveis" },
  { nome: "Teclado Mecânico", preco: 280, categoria: "Eletrônicos" },
  { nome: "Mesa de Escritório", preco: 1200, categoria: "Móveis" },
];

const produtosComDesconto = produtos.map((produto) => {
  return {
    nome: produto.nome,
    precoOriginal: produto.preco,
    precoComDesconto: produto.preco * 0.9,
  };
});

console.log("Produtos com desconto:");
console.log(produtosComDesconto);

const produtoEncontrado = produtos.find(
  (produto) => produto.nome === "Mouse Gamer"
);

console.log("\nProduto encontrado:");
console.log(produtoEncontrado);

const valorTotal = produtos.reduce((total, produto) => {
  return total + produto.preco;
}, 0);

console.log("\nValor total dos produtos:");
console.log(`R$ ${valorTotal}`);

const categorias = produtos.reduce((acc, produto) => {
  acc[produto.categoria] = (acc[produto.categoria] || 0) + 1;
  return acc;
}, {});

console.log("\nQuantidade de produtos por categoria:");
console.log(categorias);