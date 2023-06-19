const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

//Aprovado
imprimirResultado(10)

//Reprovado
imprimirResultado(6)

//Reprovado
imprimirResultado('Epa!')