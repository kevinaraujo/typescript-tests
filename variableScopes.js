var exibeMensagem = function() {

    if (true) {
        // SCOPE HAS SCOPE WITHIN THE IF CONDITION
        const idade = 14;

        console.log(idade);
    }

    idade = 16;
    console.log(idade);
    /*if(true) { 
        var escopoFuncao = 'Caelum'; 
        let escopoBloco = 'Alura';

       console.log(escopoBloco); // Alura 
   } 
   console.log(escopoFuncao); // Caelum 
   console.log(escopoBloco); */
}

exibeMensagem();