/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */
//cria uma variavel valor1 que vai guardar o valor inicializea com 0
let valor1 = 0
// cria uma constante h1_valor  que vai ser onde mostraremos o valor depois de clicado
// e com um querySelector seletor de pesquisa selecione o h1 pelo ID valor
// que é onde vamos apresentar o valor depois de clicado
const h1_valor = document.querySelector("#valor")
//agora busque o botão decremento pelo id e cire um eventListener de clique
//quando clicado vai chamar uma arow function que vai decrementar a variável valor1 em 1
//cada vês que der um clique no botão btn_decremento
document.querySelector("#btn_decremento").addEventListener('click', () =>{
    h1_valor.textContent = --valor1;
})
//vai incrementar a variável valor1 em 1
//cada vês que der um clique no botão btn_incremento a arow function vai incrementar
document.querySelector("#btn_incremento").addEventListener('click', () =>{
    //incrementa a variavel valor1 em +1 a cada clique neste botão
    h1_valor.textContent = ++valor1;
})