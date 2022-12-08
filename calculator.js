
//Imprimindo a "logo" do programa
console.log('  ____ _____ _____                  _____          _      _____ _    _ _            _______ ____  _____   ');
console.log(' |  _ \\_   _|  __ \\     /\\         / ____|   /\\   | |    / ____| |  | | |        /\\|__   __/ __ \\|  __ \  ');
console.log(' | |_) || | | |__) |   /  \\       | |       /  \\  | |   | |    | |  | | |       /  \\  | | | |  | | |__) | ');
console.log(' |  _ < | | |  _  /   / /\\ \\      | |      / /\\ \\ | |   | |    | |  | | |      / /\\ \\ | | | |  | |  _  /  ');
console.log(' | |_) || |_| | \\ \\  / ____ \\     | |____ / ____ \\| |___| |____| |__| | |____ / ____ \\| | | |__| | | \\ \\  ');
console.log(' |____/_____|_|  \\_\\/_/    \\_\\     \\_____/_/    \\_\\______\\_____|\\____/|______/_/    \\_\\_|  \\____/|_|  \\_\\ ');
console.log('\n\nWelcome to Bira`s Calculator!');

//#region Opções de Operações
    var menu = [
        operacao01 = { nome: '[01] - Soma'               },
        operacao02 = { nome: '[02] - Subtração'          },
        operacao03 = { nome: '[03] - Multiplicação'      },
        operacao04 = { nome: '[04] - Divisão'            },
        operacao05 = { nome: '[05] - Potencia'           },
        operacao06 = { nome: '[06] - Raiz'               },
        operacao07 = { nome: '[07] - Fatorial'           },
        operacao08 = { nome: '[08] - Calcular Triângulo' },
        operacao09 = { nome: '[09] - Calcular IMC'       },
        operacao10 = { nome: '[10] - Par ou Impar'       }
    ]
//#endregion

//#region Funções
    function soma() {
        let num1 = prompt('Digite aqui o primeiro numero: ');
        let num2 = prompt('Digite aqui o segundo numero: ');
        resultado = num1 + num2;

        //Mostrando o Resultado
        console.log(`${num1} + ${num2} = ${resultado}`);
    }

    function subtracao() {
        let num1 = prompt('Digite aqui o primeiro numero: ');
        let num2 = prompt('Digite aqui o segundo numero: ');
        resultado = num1 - num2;

        //Mostrando o Resultado
        console.log(`${num1} - ${num2} = ${resultado}`);
    }

    function multiplicacao() {
        let num1 = prompt('Digite aqui o primeiro numero: ');
        let num2 = prompt('Digite aqui o segundo numero: ');
        resultado = num1 * num2;

        //Mostrando o Resultado
        console.log(`${num1} * ${num2} = ${resultado}`);
    }

    function divisao() {
        let num1 = prompt('Digite aqui o primeiro numero: ');
        let num2 = prompt('Digite aqui o segundo numero: ');
        resultado = num1 / num2;

        //Mostrando o Resultado
        console.log(`${num1} / ${num2} = ${resultado}`);
    }

    function potencia() {
        let num1 = prompt('Digite aqui o primeiro numero: ');
        let num2 = prompt('Digite aqui o segundo numero: ');
        let resultado = num1 ** num2;

        //Mostrando o Resultado
        console.log(`${num1} ** ${num2} = ${resultado}`);
    }

    function raiz() {
        let num1 = prompt('Digite aqui o número: ');
        let resultado = Math.sqrt(num1);

        //Mostrando o Resultado
        console.log(`A raiz de ${num1} é: ${resultado}`)
    }

    function fatorial(n) {
        let fat = 1
        for (let c = n; c > 1; c --) {
            fat *= c;
        }

        //Mostrando o Resultado
        return fat;
    }

    function triangulo() {
        let num1 = prompt('Digite aqui o primeiro lado: ');
        let num2 = prompt('Digite aqui o segundo lado: ');
        let num3 = prompt('Digite aqui o terceiro lado: ');

        //Mostrando o Resultado de acordo com os dados
        if (num1 == num2 && num2 == num3) {
            console.log('Triângulo Equilátero');
        }
        if (num1 != num2 && num2 != num3) {
            console.log('Triângulo Escaleno');
        }
        else {
            console.log('Triângulo Isósceles');
        }
    }
    
    function IMC() {
        let num1 = prompt('Digite aqui o peso: ');
        let num2 = prompt('Digite aqui a altura: ');
        let res = num1/num2**2;

        //Mostrando o Resultado de acordo com o resultado
        if (res < 18.5) {
            console.log(`Seu IMC é ${res}; Está abaixo do peso.`);
        }
        else if (res >= 18.5 && res <= 24.99) {
            console.log(`Seu IMC é ${res}; Está com peso normal.`);
        }
        else if (res >= 25.0 && res <= 29.99) {
            console.log(`Seu IMC é ${res}; Está acima do peso.`);
        }
        else if (res >= 30.0) {
            console.log(`Seu IMC é ${res}; Está muito acima do peso.`);
        }
    }
    
    function parimp() {
        let num1 = prompt('Digite aqui o número: ');

        
        //Mostrando o Resultado dependendo se for par ou impar
        if (num1 % 2 == 0) {
            console.log(`o número ${num1} é par`)
        }
        else {
            console.log(`o número ${num1} é impar`)
        }
    }

    function inicio() {

        //Mostrando as opções à partir de um laço de repetição
        for (let i = 0; i < menu.length; i ++) {
            console.log(`${menu[i].nome}`);
        }
        
        //Gravando  a escolha do usuário
        console.log('');
        var escolha = prompt('Digite aqui a opção de opreação que deseja: ');
        
        //Dependdendo da escolha do usuário, ele roda a função selecionada:
        if (escolha <= 0 || escolha > 10) {
            console.log('\nEscolha direito...\n');
            inicio();
        }
        else if (escolha == 1) {
            soma();
        }
        else if (escolha == 2) {
            subtracao();
        }
        else if (escolha == 3) {
            multiplicacao();
        }
        else if (escolha == 4) {
            divisao();
        }
        else if (escolha == 5) {
            potencia();
        }
        else if (escolha == 6) {
            raiz();
        }
        else if (escolha == 7) {        
            let n = prompt('Digite aqui o número: ');
            
            //Exibindo o resultado da operação
            console.log(fatorial(n));
        }
        else if (escolha == 8) {
            triangulo();
        }
        else if (escolha == 9) {
            IMC();
        }
        else if (escolha == 10) {
            parimp();
        }
        else {
            console.log('\nEscolha direito...\n');
            inicio();
        }    
    }
//#endregion

//Iniciando o programa de fato
inicio();
