"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
var arr = [1, 3, 4, 5, 8, 9];
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var ages = [32, 33, 16, 40]; // MAP É RESPONSÁVEL POR PERCORRER E ACESSAR CADA ITEM DENTRO DE UM ARRAY

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); //REDUCE PROVE O RESULTADO NUM ÚNICO VALOR DE RETORNO

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //REDUCE RIGHT REALIZA OPERAÇÕES A PARTIR DO ÚLTIMO ELEMENTO

var sum1 = arr.reduceRight(function (total, next) {
  return total - next;
});
console.log(sum1); //FILTER CRIA UM OUTRO VETOR QUE SATISFAZ A CONDICIONAL 

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //ANOTHER EXAMPLE

function checkAdult(age) {
  return age >= 18;
}

var result = ages.filter(checkAdult);
console.log(result); //EVERY CHECA SE TODOS OS VALORES SATISFAZEM A CONDICIONAL (RETORNA TRUE OU FALSE)

var ages = [18, 22, 14, 6, 50];

function verifica(age) {
  return age >= 18;
}

var retorno = ages.every(verifica);
console.log(retorno); // INCLUDES VERIFICA SE EXISTE UM ELEMENTO NO ARRAY (RETORNA TRUE OU FALSE)

var b = fruits.includes("Mango");
console.log(b); //SOME CHECA SE ALGUM VALOR SATISFAZ A CONDIÇÃO

function verificaAge(age) {
  return age >= 18;
}

var test = ages.some(verificaAge);
console.log(test); //FIND VERIFICA A EXISTÊNCIA DE UM VALOR DENTRO DO ARRAY
// OBS: FIND INDEX AO INVÉS DE ACHAR O VALOR, ACHA POSIÇÃO DO VALOR

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); //CONCAT

function myFunction() {
  var hege = ["Cecilie", "Lone"];
  var stale = ["Emil", "Tobias", "Linus"];
  var children = hege.concat(stale);
  console.log(children);
} // COPY WITHIN COPIA OS DOIS PRIMEIROS ELEMENTOS PARA OS DOIS ULTIMOS ELEMENTOS


var nova = fruits.copyWithin(0, 0);
console.log(nova); //ARRAY ENTRIES MOSTRA CHAVE E VALOR DO ARRAY

var f = fruits.entries();
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = f[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var x = _step.value;
    console.log(x);
  } // FOR EACH LISTA TODO O ARRAY DISPONIBILIZANDO O VALOR E TAMBÉM O INDEX

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

fruits.forEach(percorre);

function percorre(item, index) {
  console.log('Index: ' + index + ' item: ' + item);
} // ARRAY.from CRIA UMA ARRAY DE UMA STRING


var a = Array.from("ABCDEFGH");
console.log(a); // JOIN CONVERTE UMA STRING DE UM ARRAY

var d = fruits.join();
console.log(d); //INDEX OF RETORNA O INDICE DE UM VALOR ESPECIFICADO

var c = fruits.indexOf("Mango");
console.log(c); // kEYS RETONA TODOS OS INDICES DOS VALORES PERTENCENTES AO ARRAY

var e = fruits.keys();
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var x = _step2.value;
    console.log(x);
  } //POP REMOVE O ULTIMO ELEMENTO DO ARRAY

} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

fruits.pop();
console.log(fruits); //PROTOTYPE CRIA NOVAS FUNÇÕES QUE PODEM SER USADAS POR TODOS OS OBJETOS JAVASCRIPT INCLUSIVE OS ARRAYS

Array.prototype.myUpperCase = function () {
  var i;

  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

fruits.myUpperCase();
var teste = fruits;
console.log(teste); //REVERSE ALTERA A ORDEM DOS ELEMENTOS NO ARRAY

fruits.reverse();
console.log(fruits); // SHIFT REMOVE O PRIMEIRO ITEM DO ARRAY

console.log(fruits.shift()); // SLICE SELECIONA ELEMENTOS DE UM ARRAY

var citrus = fruits.slice(1, 3);
console.log(citrus); // SORT ORDENA OS ELEMENTOS DO ARRAY

var ordena = fruits.sort();
console.log(ordena); // SPLICE ADICIONA ELEMENTOS EM POSIÇÕES ESPECÍFICAS DO ARRAY 

fruits.splice(2, 0, "LEMON", "KIWI");
console.log(fruits); //UNSHIFT ADICIONA ITENS NO COMEÇO DO ARRAY

fruits.unshift("PINEAPPLE", "WATERMELON");
console.log(fruits); // ################################### ARROW FUNCTION ################################################

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

var usu = {
  nome: "Diego",
  idade: 19,
  empresa: "Rocket Seat"
};

var nome = usu.nome,
    resto = _objectWithoutProperties(usu, ["nome"]);

console.log(resto); // PODE-SE APLICAR EM ARRAY

var arr1 = [1, 2, 3, 4];
var um = arr1[0],
    dois = arr1[1],
    resto1 = arr1.slice(2);
console.log(um, dois, resto1); // PODE-SE APLICAR EM FUNÇÕES

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function teste1(a, b) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    params[_key2 - 2] = arguments[_key2];
  }

  return a, b, params;
}

console.log(teste1(1, 3, 4, 6, 7, 4, 3, 743, 7, 3, 4)); //O SPREAD SERVE PARA PASSAR AS INFORMAÇÕES DE UM OBJETO OU ARRAY PARA OUTRO OBJETO OU ARRAY

var arr4 = [1, 2, 3];
var arr5 = [4, 5, 6];
var arr6 = [].concat(arr4, arr5);
console.log(arr6);
var l = {
  nome: "Diego",
  idade: 19,
  empresa: "Rocket Seat"
};

var l2 = _objectSpread({}, l, {
  nome: "João"
});

console.log(l2); //############################### TEMPLATE LITERALS ################################
// É OUTRA FORMA DE CONCATENAÇÃO OU REPRESENTAÇÃO DE VARIÁVEIS

var m1 = "Paulo";
var m2 = 50;
console.log("Meu nome \xE9 ".concat(m1, " e tenho ").concat(m2, " anos")); //############################## OBJECT SHORT SYNTAX ####################################
// QUANDO O NOME DA PROPRIEDADE É O MESMO DA VARIAVEL PODE-SE UTILIZAR SÓ UM NOME, EXEMPLO:

var t = "Bruno";
var t2 = 20;
var ob = {
  t: t,
  t2: t2,
  endereco: "Conjunto Paraiso Q E C 19"
};
console.log(ob);
