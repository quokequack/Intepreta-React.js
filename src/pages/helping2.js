


// cores possíveis
//primeiro de tudo você tem que dizer pro programa quais são as cores para sortear antes
//mesmo do usuario dar o palpite. além de deixar o codigo mais rapido, evita possiveis erros de execução
var cores = ['vermelho', 'amarelo', 'verde', 'azul', 'laranja', 'roxo', 'marrom', 'rosa'];

// gera a senha aleatória com base nas cores que voce ja disse la em cima
function gerarSenha() {
  var senha = [];
  while (senha.length < 4) {
    var cor = cores[Math.floor(Math.random() * cores.length)];
    if (!senha.includes(cor)) {
      senha.push(cor);
    }
  }
  // retorna a senha gerada aleatoriamente
  return senha;
}

// obtém a entrada do usuário
function obterEntrada() {
  //a entrada ja fica como array porque assim fica melhor de comparar as respostas.
  //posteriormente só precisaremos que percorrer a lista e ir checando de um por um
  var entrada = [];
  for (var i = 0; i < 4; i++) {
    var cor = prompt('Digite uma cor (vermelho, amarelo, verde, azul, laranja, roxo, marrom ou rosa):');
    entrada.push(cor);
  }
  return entrada;
}

// compara a entrada do usuário com a senha
function compararEntrada(senha, entrada) {
  var resposta = [];
  var senhaRestante = [];
  var entradaRestante = [];
  //aqui foi declarado uma variavel dentro do laço de repetição
  //que recebera inicialmente o valor 0. enquanto o valor dessa variavel for menor do que
  //o tamanho da senha que foi gerada, ela recebera + 1
  //logo depois, fazemos uma iteração, que basicamente é percorrer uma lista
  //e verificar seus valores. no caso desse codigo, estamos verificando se
  //o valor em cada posição da lista senha é igual a cada valor em cada posição
  //da lista entrada
  for (var i = 0; i < senha.length; i++) {
    if (senha[i] === entrada[i]) {
      resposta.push('preto');
    } else {
      senhaRestante.push(senha[i]);
      entradaRestante.push(entrada[i]);
    }
  }
  //aqui ele vai fazer a mesma coisa que o for de cima, apenas configurando os valores para branco e cinza
  //no caso de os valores das duas listas nao serem iguais.
  for (var i = 0; i < entradaRestante.length; i++) {
    var cor = entradaRestante[i];
    var index = senhaRestante.indexOf(cor);
    if (index !== -1) {
      resposta.push('branco');
      senhaRestante.splice(index, 1);
    } else {
      resposta.push('cinza');
    }
  }
  return resposta;
}

// exibe a resposta do jogo
function exibirResposta(resposta) {
  alert('Resposta: ' + resposta.join(' '));
}

// inicia o jogo
function jogar() {
    //chama a funcao que vai gerar o array aleatorio
  var senha = gerarSenha();
  var tentativas = [];
  var melhorResposta = null;
  var jogando = true;
  //enquanto jogando for verdadeiro, ele executará o laço de repetição
  while(jogando == true){
    //enquanto as tentativas forem menor que 10, ele continua jogando
    for (var i = 0; i < 10; i++) {
        alert('Tentativa ' + (i + 1) + ':');
        var entrada = obterEntrada();
        var resposta = compararEntrada(senha, entrada);
        exibirResposta(resposta);
        //pergunta pro usuario se deseja continuar jogando ou parar
        var parar = prompt("Deseja parar ou continuar jogando? 1 - parar; 2 - continuar.");
        //se for parar, ele vai dizer que o novo valor de jogando é false, então, por obrigação
        //o while acaba
        if (parar == 1){
            jogando = false;
            //o break quebra o for, assim ele ira parar mesmo se ainda nao tiver 10 tentativas
            break;
        //caso o usuario queira continuar, o while e o for continuam normalmente
        }else{
            tentativas.push({ entrada: entrada, resposta: resposta });
            if (resposta.every(function(valor) { return valor === 'preto'; })) {
                alert('Parabéns, você acertou a senha!');
                return;
            }else if (melhorResposta === null || resposta.filter(function(valor) { return valor === 'preto'; }).length > melhorResposta.filter(function(valor) { return valor === 'preto'; }).length) {
                melhorResposta = resposta;
            }
        }
    }
    //depois que o for acaba, ele diz qual era a senha e qual foi a melhor resposta
    alert('Você não acertou a senha. A senha era ' + senha.join(' '));
    // CASO PRECISE ---> exibirResposta(senha.map(function(valor) { return 'preto'; }));
    alert('Melhor resposta: ' + melhorResposta.join(' '));
  }
  
}

// executa o jogo
jogar();
