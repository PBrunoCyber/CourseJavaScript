

//####################################### TESTANDO CLASSES E HERANÇAS ############################################

/* class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List {
    constructor() {
        super();
        this.usuario = "Diego";
    }

    mostraUsu() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();
document.getElementById("novotodo").onclick = () => {
    MinhaLista.add("Novo Todo");
}

MinhaLista.mostraUsu(); */


//################################ MÉTODOS ESTÁTICOS ########################################

/* class TodoList {
    constructor() {
        this.todos = [];
    }
    //Metodo estatico não enxerga as propriedades fora dele
    static addTodo() {
        this.todos.push("Novo Todo");
        console.log(this.todos);
    }
} */

//############################ DIFERENÇA ENTRE CONST, LET E VAR ###############################################

//Na const não é possível reatribuir valores à uma variável, mas é possível realizar mutação quando se recebe um objeto

/* // Não pode
const a = 1;
a = 3;
// Pode
const usu = {nome:"Cleiton"};
usu.nome = "Paulo"; */


//Let é uma varável de escopo (só é possível exergà-la dentro das chaves)

/* function teste(x) {
    let y = 2;
    if (x > 5) {
        console.log(x, y);
    }
}

teste(10); */

//############################## OPERAÇÕES EM ARRAY ############################################

const arr = [1, 3, 4, 5, 8, 9];
var fruits = ["Banana", "Orange", "Apple", "Mango"];

var ages = [32, 33, 16, 40];

// MAP É RESPONSÁVEL POR PERCORRER E ACESSAR CADA ITEM DENTRO DE UM ARRAY
const newArr = arr.map(function (item, index) {
    return item + index;
})

console.log(newArr);

//REDUCE PROVE O RESULTADO NUM ÚNICO VALOR DE RETORNO
const sum = arr.reduce(function (total, next) {
    return total + next;
});

console.log(sum);

//REDUCE RIGHT REALIZA OPERAÇÕES A PARTIR DO ÚLTIMO ELEMENTO
const sum1 = arr.reduceRight(function (total, next) {
    return total - next;
});

console.log(sum1);

//FILTER CRIA UM OUTRO VETOR QUE SATISFAZ A CONDICIONAL 
const filter = arr.filter(function (item) {
    return item % 2 === 0;
});
console.log(filter);

//ANOTHER EXAMPLE

function checkAdult(age) {
    return age >= 18;
}

var result = ages.filter(checkAdult);
console.log(result);

//EVERY CHECA SE TODOS OS VALORES SATISFAZEM A CONDICIONAL (RETORNA TRUE OU FALSE)
var ages = [18, 22, 14, 6, 50];

function verifica(age) {
    return age >= 18;
}
var retorno = ages.every(verifica);
console.log(retorno);

// INCLUDES VERIFICA SE EXISTE UM ELEMENTO NO ARRAY (RETORNA TRUE OU FALSE)
var b = fruits.includes("Mango");
console.log(b);

//SOME CHECA SE ALGUM VALOR SATISFAZ A CONDIÇÃO
function verificaAge(age) {
    return age >= 18;
}
var test = ages.some(verificaAge);
console.log(test);

//FIND VERIFICA A EXISTÊNCIA DE UM VALOR DENTRO DO ARRAY
// OBS: FIND INDEX AO INVÉS DE ACHAR O VALOR, ACHA POSIÇÃO DO VALOR
const find = arr.find(function (item) {
    return item === 4;
});

console.log(find);

//CONCAT
function myFunction() {
    var hege = ["Cecilie", "Lone"];
    var stale = ["Emil", "Tobias", "Linus"];
    var children = hege.concat(stale);
    console.log(children);
}

// COPY WITHIN COPIA OS DOIS PRIMEIROS ELEMENTOS PARA OS DOIS ULTIMOS ELEMENTOS
var nova = fruits.copyWithin(0, 0);
console.log(nova);

//ARRAY ENTRIES MOSTRA CHAVE E VALOR DO ARRAY
var f = fruits.entries();
for (var x of f) {
    console.log(x);
}

// FOR EACH LISTA TODO O ARRAY DISPONIBILIZANDO O VALOR E TAMBÉM O INDEX
fruits.forEach(percorre);
function percorre(item, index) {
    console.log('Index: ' + index + ' item: ' + item);
}

// ARRAY.from CRIA UMA ARRAY DE UMA STRING
var a = Array.from("ABCDEFGH");
console.log(a);


// JOIN CONVERTE UMA STRING DE UM ARRAY
var d = fruits.join();
console.log(d);

//INDEX OF RETORNA O INDICE DE UM VALOR ESPECIFICADO
var c = fruits.indexOf("Mango")
console.log(c);

// kEYS RETONA TODOS OS INDICES DOS VALORES PERTENCENTES AO ARRAY
var e = fruits.keys();
for (var x of e) {
    console.log(x);
}

//POP REMOVE O ULTIMO ELEMENTO DO ARRAY
fruits.pop();
console.log(fruits);


//PROTOTYPE CRIA NOVAS FUNÇÕES QUE PODEM SER USADAS POR TODOS OS OBJETOS JAVASCRIPT INCLUSIVE OS ARRAYS
Array.prototype.myUpperCase = function () {
    var i;
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
}

fruits.myUpperCase();
var teste = fruits;
console.log(teste);

//REVERSE ALTERA A ORDEM DOS ELEMENTOS NO ARRAY
fruits.reverse();
console.log(fruits);

// SHIFT REMOVE O PRIMEIRO ITEM DO ARRAY
console.log(fruits.shift());

// SLICE SELECIONA ELEMENTOS DE UM ARRAY
var citrus = fruits.slice(1, 3);
console.log(citrus);

// SORT ORDENA OS ELEMENTOS DO ARRAY
var ordena = fruits.sort();
console.log(ordena);

// SPLICE ADICIONA ELEMENTOS EM POSIÇÕES ESPECÍFICAS DO ARRAY 
fruits.splice(2, 0, "LEMON", "KIWI");
console.log(fruits);

//UNSHIFT ADICIONA ITENS NO COMEÇO DO ARRAY
fruits.unshift("PINEAPPLE", "WATERMELON");
console.log(fruits);


// ################################### ARROW FUNCTION ################################################


/* const ar = [1, 3, 4, 6, 8];

// SEM ARRAY FUNCTION
const newAr = ar.map(function (item) {
    return item * 2;
})

//ARROW FUNCTION 1 (QUANDO SE TEM UMA FUNÇÃO ANÔNIMA PODE ELEMINAR)
const newAr = ar.map((item) => {
    return item * 2;
})

//ARROW FUNCTION 2 (QUANDO SE TEM SOMENTE UM PARAMETRO PODE ELEMINAR OS PARÊNTESES)
const newAr = ar.map(item => {
    return item * 2;
})

// ARROW FUNCTION 3 (QUANDO SE TEM SOMENTE UMA LINHA RETORNANDO ALGO PODE ELEMINAR)
const newAr = ar.map(() => item * 2);

// ARROW FUNCTION 4

function name() { }
let nome = () => "José";
let obj = () => ({ name: "josé" });
var r = nome();
var v = obj().name;
console.log(v); */



// ######################################## VALORES PADRÃO ################################################
/*
function soma(a = 3, b = 5) {
    return a + b;
}

console.log(soma());

const soma1 = (a = 3, b = 5) => a + b;
console.log(soma1()); */

// DESESTRUTURÇÃO

/* const usuario = {
    nome: "Diego",
    idade: 19,
    endereco: {
        cidade: "Floriano",
        estado: "PI"
    }
}

const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome, idade, cidade);

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}
mostraNome(usuario); */


// ##################################### OPERADORES REST AND SPREAD ##################################

// REST SERVE PARA PEGAR O RESTO DAS PROPRIEDADES, EXEMPLO:

const usu = {
    nome: "Diego",
    idade: 19,
    empresa: "Rocket Seat"
}

const { nome, ...resto } = usu;
console.log(resto);

// PODE-SE APLICAR EM ARRAY
const arr1 = [1, 2, 3, 4];
const [um, dois, ...resto1] = arr1;

console.log(um, dois, resto1);

// PODE-SE APLICAR EM FUNÇÕES

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function teste1(a, b, ...params) {
    return a, b, params;
}

console.log(teste1(1, 3, 4, 6, 7, 4, 3, 743, 7, 3, 4));

//O SPREAD SERVE PARA PASSAR AS INFORMAÇÕES DE UM OBJETO OU ARRAY PARA OUTRO OBJETO OU ARRAY

const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];
const arr6 = [...arr4, ...arr5];
console.log(arr6);

const l = {
    nome: "Diego",
    idade: 19,
    empresa: "Rocket Seat"
}
const l2 = {
    ...l, nome: "João"
}
console.log(l2);


//############################### TEMPLATE LITERALS ################################

// É OUTRA FORMA DE CONCATENAÇÃO OU REPRESENTAÇÃO DE VARIÁVEIS

const m1 = "Paulo";
const m2 = 50;

console.log(`Meu nome é ${m1} e tenho ${m2} anos`);

//############################## OBJECT SHORT SYNTAX ####################################

// QUANDO O NOME DA PROPRIEDADE É O MESMO DA VARIAVEL PODE-SE UTILIZAR SÓ UM NOME, EXEMPLO:

const t = "Bruno";
const t2 = 20;

const ob = {
    t,
    t2,
    endereco: "Conjunto Paraiso Q E C 19"
}

console.log(ob);
