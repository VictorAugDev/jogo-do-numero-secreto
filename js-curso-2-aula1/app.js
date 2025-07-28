let listaNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1 ;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo Número Secreto !!');
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 50 ')
  
}
exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa' 
        exibirTextoNaTela('h1','Acertou!');
        let mensagemTentativas = `você descobriu o numero secreto!, com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');// desabilitar o atributo do botao , permitindo que ele seja ultilizado apos acertar o valor
    }else{
        if(chute > numeroSecreto){
           exibirTextoNaTela('p', 'o numero secreto é menor ') ;
        }else{
            exibirTextoNaTela('p', 'o numero secreto é maior ') ;
        }
        tentativa++;
        limparCampo();
    }
} 

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numeroLimite +1);
    let quantidadeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeElementosNaLista == numeroLimite){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){// verifica se o numero ja foi escolhido
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
        
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').removeAttribute('disabled', true);
}