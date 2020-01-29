// É POSSÍVEL CRIAR UMA FUNÇÃO PADRÃO DENTRO DO ARQUIVO PARA ISSO DEVEMOS UTILIZAR A 
// KEYWORD DEFAULT PARA FACILITAR.

export default function adicionar(...params) {
    return params.reduce((total, next) => total + next);
}

// OBS É POSSÍVEL CRIAR OUTRAS FUNÇÕES, MAS SEM A KEYWORD DEFAULT

export function soma(a, b) {
    return a + b;
}

export function subtracao(a, b) {
    return a - b;
}

export const idade = 23;
export class Usuario {
    static info() {
        console.log('Apenas teste');
    }
}
