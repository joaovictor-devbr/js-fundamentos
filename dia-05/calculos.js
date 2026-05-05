// Soma de dois números
function soma(a, b) {
    return a + b;
}

// Média de vários números
function media(...nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total / nums.length;
}

// Retorna o maior número entre dois
function maximo(a, b) {
    return a > b ? a : b;
}

// Fatorial de um número
function fatorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}


// Testes
console.log(soma(10, 5));       
console.log(media(10, 5, 5));   
console.log(maximo(10, 20));    
console.log(fatorial(5));       