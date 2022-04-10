//essa classe valida o cpf de uma pessoa

//é criado a classe que vai receber o cpf como parametro
export default class ValidaCPF {
  constructor(cpfEnviado) {
      //é definido uma configuração desse dado que é recebido, e feito uma 'limpeza', retirando os pontos, traços etc. Deixando apenas os numeros
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),//aqui é feito a limpeza
    });
  }
  //essa função detecta se o cpf nao é numeros repetidos
  éSequencia() {
      //charAt começa do indice zero a verificação e repete 11 vezes ate o final do cpf
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; //entao se for igual ao cpf enviado retorna boleano
  }

  //essa função é para gerar o cpf que vai ser comparado
  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2); //primeiro separa os os dois digitos do restante, cpf sem digito fica so com os numero sem os digitos com slice, retira do indice  até o -2 (penultimo) e joga na const
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); // aqui a const do digito 1 recebe o resultado do calculo de geradigito que recebe o cpfsemdigito como parametro para o calculo
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1); // aqui a mesma coisa, mas o digito1 também é acrescentado como parametro
    this.novoCPF = cpfSemDigitos + digito1 + digito2 //que resulta no cpf completo
  }
  //aqui é feito o calculo
  static geraDigito(cpfSemDigitos) {
    let total = 0; //esse é total que vai receber a soma completa dos numeros do cpf
    let reverso = cpfSemDigitos.length + 1; //isso é o contador que vai multiplicar com cada numero do cpf
    //nesse for iteramos as strings multiplicando elasp pelo reverso e somando ao total
    for (let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--; //decrementando o reverso como é feito no calculo original
    }
    const digito = 11 - (total % 11) //essa constante recebe o calculo final de acordo com a formula.
    return digito <= 9 ? String(digito) : '0' //e retornamos para nosso cpf gerado o digito, caso ele seja menor ou igual a nove mandamos o digito se se for maior que novo ele recebe '0'
  }
  //essa é a função de validação inicial
  valida() {
    if (!this.cpfLimpo) return false; //se nao tiver cpf é false
    if (typeof this.cpfLimpo !== "string") return false; //se for diferente de string da false
    if (this.cpfLimpo.length !== 11) return false; //se o valor for menor que o padrão é false
    if (this.éSequencia()) return false; //se o número for sequencia de numeros repetidos da false
    if (!this.geraNovoCpf()) //por fim a função que vai gerar o cpf a ser comparado.

    return this.novoCPF === this.cpfLimpo //por fim a comparação final com o cpf recebido
  }
}

//aqui atribuimos nosso cpf a classe
const validacpf = new ValidaCPF("603.360.453.95");

//no final uma comparação para mostrar dando certo ou nao.
/*if(validacpf.valida()){
    console.log('CPF válido')
} else {
    console.log('CPF Inválido')
}*/


