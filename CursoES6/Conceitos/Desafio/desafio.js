//1° QUESTÃO
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
    isAdmin() {
        return this.admin === true;
    }
}
class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

// 2º QUESTÃO
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
//2.1
const map = usuarios.map(item => item.idade);
console.log(map);

//2.2
const res = usuarios.filter(item => item.empresa === "Rocketseat" && item.idade >= 18);
console.log(res);

//2.3 
const find = usuarios.find(item => item.empresa === "Google");
console.log(find);

//2.4 
const newAr = usuarios.map(item => {
    return { ...item, idade: item.idade * 2 };
}).filter(item => item.idade <= 50);
console.log(newAr);

// 3° QUESTÃO

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
usuario => usuario.idade;

// 3.3
// Dica: Utilize uma constante pra function

const nome1 = "Diego", idade = 23;
const mostraUsuario = (nome1 = 'Diego', idade = 18) => { { nome1, idade } };
mostraUsuario(nome1, idade);
mostraUsuario(nome1);

// 3.4
const promise = () => new Promise(resolve => resolve());

// 4° QUESTÃO

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
const { nome, endereco: { cidade, estado } } = empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); //SC

//4.1
function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//5° QUESTÃO
const arR = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arR;
console.log(x, y);

const soma = (...params) => params.reduce((total, next) => total + next);
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//5.1° QUESTÃO
const usuario1 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {
    ...usuario1,
    nome: "Gabriel"
}

const usuario3 = {
    ...usuario2,
    endereco: {
        cidade: "Lontras"
    }
}
console.log(usuario2, usuario3);

//6° QUESTÃO
const usuario4 = 'Diego', idade1 = 23;
console.log(`O usuário ${usuario4} possui ${idade1} anos`);

//7° QUESTÃO
const nome2 = 'Diego', idade3 = 23;
const usuario6 = {
    nome2,
    idade3,
    cidade: 'Rio do Sul',
};

