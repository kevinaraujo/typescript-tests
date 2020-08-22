var exibeMensagem = function() {

    if (true) {
        // SCOPE HAS SCOPE WITHIN THE IF CONDITION
        const idade = 14;

        console.log(idade);
    }

    idade = 16;
    console.log(idade);
}

exibeMensagem2 = () => {
    if(true) { 
        var escopoFuncao = 'Caelum'; 
        let escopoBloco = 'Alura';

       console.log(escopoBloco); // Alura 
   } 
   console.log(escopoFuncao); // Caelum 

   // WILL THROW AN ERROR BECAUSE escopoBloco IS NOT IN THIS SCOPE
   console.log(escopoBloco);
}

showMessage3 = () => {
    var a;

    var steps = [1, 5, 10, 15];
    steps.forEach(element => {
        a = 12;
        console.log(a);
    });

    console.log(a);
}

showMessage3();
exibeMensagem();
exibeMensagem2();