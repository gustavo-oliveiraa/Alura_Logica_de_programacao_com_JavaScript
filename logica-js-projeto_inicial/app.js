alert('Boas vindas ao jogo do número secreto.');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        // Template Strings
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }

}
