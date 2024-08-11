const queijo = document.querySelector("#queijo");
const contadorHTML = document.querySelector("#contador");
// Seleciona elementos do HTML através do id
let valorContador = parseInt(contadorHTML.textContent);
// Tranforma o valor da tag "contador" do HTML para um valor inteiro

queijo.addEventListener("click", () => {
    queijo.classList.add("explode");
    // Adiciona a classe "explode"
  
    setTimeout(() => {
      queijo.classList.remove("explode");
    }, 150);
  // Toda vez que o queijo é clicado, ele ativa o evento de escuta, basicamente o que faz o botão funcionar
  //para o objetivo desejado (botão pela forma como funciona -> através de um clique)
  valorContador += 1;
  // Esse objetivo desejado aparece descrito aqui, ou seja, acrescenta "1" por clique, contador
  contadorHTML.textContent = valorContador; // Atualiza a tag do "contador" do HTML para o valorContador


});
// Remove a classe "explode" após tempo determinado para reutilização do efeito

function moveCheese() {
  // Função que move o queijo para uma posição aleatória na tela

  const larguraAleatoria = Math.random() * 950 + 200;
  // Gera uma posição aleatória para a margem left
  const alturaAleatoria = Math.random() * 250;
  // Gera uma posição aleatória para a margem top

  queijo.style.marginLeft = `${larguraAleatoria}px`;
  queijo.style.marginTop = `${alturaAleatoria}px`;
  // Move as imagens através das margens estabelecida
}
setInterval(moveCheese, 900);
// Determina o tempo de movimentação da imagem (Chamada de função)
moveCheese();
// Move o queijo no refresh da página, pra dificultar e dinaminzar (Chamada de função única - se tivesse só essa
//moveria apenas uma vez)
