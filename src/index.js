import GeraCPF from "./modules/GeraCPF"; //importamos nosso geracpf novo
import "./assets/css/style.css"; //aqui a importação do css

//aqui acrescentei um evento para gerar o cpf
document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("generate")) generateCPF();
});
//aqui ele gera o cpf novo
function generateCPF() {
  const gera = new GeraCPF(); //buscamos da nossa classe gerou a partir da outra clase la kk
  const cpfGerado = document.querySelector(".cpf-gerado"); //buscamos nosso html via dom
  cpfGerado.innerHTML = gera.geraNovoCpf(); //aqui geramos o cpf no html dinamicamente
}
