// ############################## APLICAÇÃO COM EC6 ##################################
import api from './api';

class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById("repo-form");
        this.input = document.querySelector('input');
        this.listElement = document.querySelector("div#b ul");
        this.registerHandlers();
    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
        this.addList();
    }

    async addRepository(event) {
        event.preventDefault();
        this.repositories.length = 0;
        const repoInput = this.input.value;
        this.setLoading(true);

        try {

            const response = await api.get(`users/${repoInput}/repos`);
            for (let i = 0; i < response.data.length; i++) {
                const { name, html_url, description, owner: { avatar_url } } = response.data[i];
                this.repositories.push({
                    name,
                    description,
                    avatar_url,
                    html_url,
                });
            }
            this.addList();
        } catch (error) {
            var li = document.getElementById('loading');
            li.remove();
            var lia = document.createElement('li');
            lia.append("Se fudeu parça!");
            this.listElement.appendChild(lia);

            li.remove();
        }
        this.setLoading(false);
        this.input.value = "";
    }
    addList() {
        this.listElement.innerHTML = "";
        for (var repo of this.repositories) {
            let li = document.createElement('li'), div = document.createElement('div');
            let img = document.createElement('img'), p = document.createElement('p');
            let b = document.createElement('b'), a = document.createElement('a');
            img.setAttribute("src", repo.avatar_url);
            a.setAttribute("href", repo.html_url);
            p.append(repo.description);
            b.append(repo.name);
            a.append("Acessar");
            div.appendChild(b);
            div.appendChild(p);
            div.appendChild(a);
            li.appendChild(img);
            li.appendChild(div);
            this.listElement.appendChild(li);
        }
    }
    setLoading(loading = true) {
        if (loading) {
            this.listElement.innerHTML = '';
            var li = document.createElement('li');
            li.append("carregando...");
            li.setAttribute('id', 'loading');
            this.listElement.appendChild(li);
        }
    }
}
new App();
// ########################### AXIOS ################################################

//NÃO EXISTE .CATCH NO ASYNC/AWAIT PARA ISSO É PRECISO UTILIZAR O TRY...CATCH
import axios from 'axios';
class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.log("Erro na API");
        }
    }
}
//Api.getUserInfo('PBrunoCyber');
//Api.getUserInfo('jrquadros');

class Github {
    static async getRepositories(repo) {
        try {
            const data = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(data.data);
        } catch (error) {
            console.log("Repositório não existe");
        }

    }
}
//Github.getRepositories('rocketseat/unform');


// ########################### ASYNC/AWAIT ##########################################
const minhaPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => { resolve('Ok') }, 2000))

// ASSYNC SEM ARROW FUNCTION
async function executePromise() {
    //OBS: O SEGUNDO AWAIT SÓ IRÁ EXECUTAR DEPOIS QUE O PRIMEIRO EXECUTAR E ASSIM SUCESSIVAMENTE!
    // O AWAIT NUNCA DEVE SER CHAMADO FORA DE UMA FUNÇÃO ASSYNC
    console.log(await minhaPromise());
}

// ASSYNC COM ARROW FUNCTION
const execute = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
//executePromise();
//execute();



// ########################### IMPORT/EXPORT #########################################
//import adicao, { soma as a, subtracao } from './funcoes';
//import * as funcoes from './funcoes';

/*  QUANDO SÓ TEM UMA FUNÇÃO DENTRO DO ARQUIVO PODE UTILIZAR
 SEM CHAVES E COLOCAR QUALQUER NOME */

/* PARA RENOMEAR A FUNÇÃO QUE NÃO UTILIZE A KEYWORD DEFAULT,
BASTA ADICIONAR UM "as" PARA DAR UM APELIDO PARA FUNÇÃO, EX:
import { soma as SOMATESTE, subtracao as SUBTRAÇÃOTESTE } from './funcoes';*/

/* PARA NÃO FICAR DIGITANDO TODAS AS FUNÇÕES QUANDO SE IMPORTA,
BASTA ADICIONAR UM import * as <NOME> from <''> */
/*
console.log(funcoes.soma(1, 2));
console.log(funcoes.subtracao(10, 5));
console.log(funcoes.default(1, 2, 3, 4, 5, 6, 7, 8, 9)); */
