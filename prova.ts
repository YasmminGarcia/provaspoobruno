const entradaprova = require("readline-sync");

let conta : number = parseFloat (entradaprova.question("Numero de sua conta: "));
let senha : number = parseFloat (entradaprova.question("SENHA: "));
let montante = 1000

if(senha == 42519855835 && conta == 1234){
    console.log(montante)
    console.log("Saque")
    console.log("Deposito")
        let opcao = entradaprova.question("Qual queres: saque, deposito ou sair: ")
        
if(opcao == "saque"){
 let dep: number = parseFloat(entradaprova.question("Valor do saque: "))
let senha2 = entradaprova.question("SENHA: ")
                
        if(dep <= montante && senha2 == 42519855835){
            console.log("NOVO SALDO DE: " + (montante - dep))   
        }
        }
        
           else if(opcao == "deposito"){
let dep : number = parseFloat(entradaprova.question("Valor do deposito: "))
let senha2 = entradaprova.question("SENHA: ")

 if(dep >= montante && senha2 == 42519855835){
  console.log("NOVO SALDO DE: " + (montante + dep))   
        }

        else if(montante>dep){
            console.log("VALOR INVALIDO!")
        }

        else if(senha2 != 42519855835){
            console.log("SENHA INVALIDA!!")

 if (opcao == "deposito"){
let value2 : number = parseFloat (entradaprova.question("Valor do depositar: "))
let senha3 = entradaprova.question("SENHA: ")

 if(senha3 == 42519855835){
            console.log("Novo saldo: " + (montante + value2))
        }}}
    }
}

     else if(senha != 42519855835){
     console.log("SENHA INCORRETA!")
}

let sair = entradaprova.question("deseja sair?: ")
if(sair == "sim"){
    console.log("XAUUU")
}
