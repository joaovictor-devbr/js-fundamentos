const tags = [
  "javascript",
  "node",
  "react",
  "javascript",
  "css",
  "node",
  "html"
];

const tagsUnicas = new Set(tags);

console.log("Tags únicas:");
console.log(tagsUnicas);

const listaTags = [...tagsUnicas];

console.log("\nArray final:");
console.log(listaTags);

console.log("\nIterando no Set:");

for (const tag of tagsUnicas) {
  console.log(tag);
}

const frase =
  "javascript é incrível e javascript é poderoso";

const palavras = frase.split(" ");

const contador = new Map();

for (const palavra of palavras) {
  if (contador.has(palavra)) {
    contador.set(
      palavra,
      contador.get(palavra) + 1
    );
  } else {
    contador.set(palavra, 1);
  }
}

console.log("\nContagem de palavras:");

for (const [palavra, quantidade] of contador) {
  console.log(`${palavra}: ${quantidade}`);
}

console.log("\nVerificando existência:");
console.log(tagsUnicas.has("react"));

console.log("\nQuantidade de tags únicas:");
console.log(tagsUnicas.size);

console.log("\nQuantidade de palavras diferentes:");
console.log(contador.size);