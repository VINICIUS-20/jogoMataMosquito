var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

var criaMosquitoTempo = 1500;
var nivel = window.location.search;
nivel = nivel.replace('?','');

if (nivel === 'normal') {
    criaMosquitoTempo = 1500;    
}
else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000;
}
else if (nivel === 'chuckNorris') {
    criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo()
{
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo()

/* Início cronometro */
var cronometro = setInterval(function(){
    tempo -= 1;
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href='vitoria.html'
    }
    else{
        document.getElementById('cronometro').innerHTML = tempo
    }
},1000)
/* Fim cronometro */

/* Inicio posição randômica */
function posicaoRandomica() 
{
    /* Remover o mosquito anterior caso exista */
    if (document.getElementById('mosquito')) 
    {
        document.getElementById('mosquito').remove();
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'            
        }
        else{
            document.getElementById('v' + vidas).src = "./imagens/coracao_vazio.png"
            vidas ++
        }
    }
    var posicaoX = Math.floor(Math.random()* largura)-90;
    var posicaoY = Math.floor(Math.random()* altura)-90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    var mosquito = document.createElement('img');
    mosquito.src = './imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'py';
    mosquito.style.position = 'absolute';
    mosquito.id= 'mosquito'
    mosquito.onclick = function(){
        this.remove();
    }
    document.body.appendChild(mosquito)
}
var criaMosquito = setInterval(function(){
    posicaoRandomica()
},criaMosquitoTempo)
/* Fim posição randômica */

/* Inicio tamanho randômico */
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()* 3)

    switch (classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}
/* Fim tamanho randômico */

/* Início lados aleatórios */
function ladoAleatorio() {
    var classe = Math.floor(Math.random()* 2)
    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}
/* Fim lados aleatórios */