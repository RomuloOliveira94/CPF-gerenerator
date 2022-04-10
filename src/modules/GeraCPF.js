import ValidaCPF from "./ValidaCPF"; //copiamos nossa classe que valida cpf e importamos, detalhe exportamos como default la no nosso arquivo

export default class GeraCPF {
    //essa função gera os nosso numeros aleatorios
    rand(min = 100000000, max = 999999999){ //esse numeros longos que estao ai, geram caso a gente nao passe nada, o que vai ser o caso.
        return String(Math.floor(Math.random() * (max - min) + min)) //retorna em string nosso aleatorio
    }
    //essa função apenas formata nosso cpf com os pontos e tracinho
    formatado(cpf){
        return(
            cpf.slice(0,3) + '.' +
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' +
            cpf.slice(9,11) 
        )
    }

    //aqui geramos o nosso cpf
    geraNovoCpf(){
        const cpfSemDigito = this.rand(); //primeiro pegamos os numero randomicos
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito) //depois buscamos o primeiro digito vindo de uma função lá da nossa classe que importamos
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1) //aqui o mesmo, so que adicionamos o digito 1

        const novoCpf = cpfSemDigito + digito1 + digito2 //geramos o novo cpf

        return this.formatado(novoCpf) //e retornamos ja formatado
    }

}