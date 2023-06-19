function teste1(num) {
    if(num > 7)
        console.log(num)
        console.log('Final')

}

//Vai mostrar a primeira linha por ser verdadeiro
teste1(6)

// Vai mostrar a segunda linha por ser falsa
teste1(8)

function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
}

//Imprime os dois pois o ';' está logo a seguir ao if. Fazendo com que o bloco a seguir seja só isso, um bloco com o console.log
teste2(6)
teste2(8)