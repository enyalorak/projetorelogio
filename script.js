function atualizarTempo(){
    var display = document.querySelector('.display'); //seleciona a tag html (div). nesse caso vou referenciar pela a classe display

    var agora = new Date();

    var horario = corrigirHorario(agora.getHours()) + ":" + corrigirHorario(agora.getMinutes()) + ":" + corrigirHorario(agora.getSeconds());

    display.textContent = horario; //o conteudo de texto da div vai receber o valor do horario
}


//função para corrigir o horario
//mudar 1 para 01
function corrigirHorario(numero){
    if (numero < 10){
        numero = '0' + numero //vou concatenar os numeros menores de 10 com o 0
    }
    return numero; //retorna o num modificado
}
//dps alicar a função em cada numero na variável horario

atualizarTempo();//chamar primeiro a funcao do horario pra dps ir atualizando o tempo
//assim quando atualizo a pagina os num do relogio nao zera
setInterval(atualizarTempo, 1000  ); //recebe como parametro uma outra função para ser executada
//a funcao so recebe em milisegundos no seg parametro
//1000 milisegundos = 1segundo
console.log(horario);
