var entradaprova = require("readline-sync");
var conta = parseFloat(entradaprova.question("Numero de sua conta: "));
var senha = parseFloat(entradaprova.question("SENHA: "));
var montante = 1000;
if (senha == 42519855835 && conta == 1234) {
    console.log(montante);
    console.log("Saque");
    console.log("Deposito");
    var opcao = entradaprova.question("Qual queres: saque, deposito ou sair: ");
    if (opcao == "saque") {
        var dep = parseFloat(entradaprova.question("Valor do saque: "));
        var senha2 = entradaprova.question("SENHA: ");
        if (dep <= montante && senha2 == 42519855835) {
            console.log("NOVO SALDO DE: " + (montante - dep));
        }
    }
    else if (opcao == "deposito") {
        var dep = parseFloat(entradaprova.question("Valor do deposito: "));
        var senha2 = entradaprova.question("SENHA: ");
        if (dep >= montante && senha2 == 42519855835) {
            console.log("NOVO SALDO DE: " + (montante + dep));
        }
        else if (montante > dep) {
            console.log("VALOR INVALIDO!");
        }
        else if (senha2 != 42519855835) {
            console.log("SENHA INVALIDA!!");
            if (opcao == "deposito") {
                var value2 = parseFloat(entradaprova.question("Valor do depositar: "));
                var senha3 = entradaprova.question("SENHA: ");
                if (senha3 == 42519855835) {
                    console.log("Novo saldo: " + (montante + value2));
                }
            }
        }
    }
}
else if (senha != 42519855835) {
    console.log("SENHA INCORRETA!");
}
var sair = entradaprova.question("deseja sair?: ");
if (sair == "sim") {
    console.log("XAUUU");
}
