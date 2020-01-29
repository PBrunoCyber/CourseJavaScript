// AJAX e JSAssincrono

// XMLHttpRequest da acesso às funcionalidades Ajax
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/PBrunoCyber');
xhr.send(null);

// Transforma a requisição em statica(síncrona) para saber se a requisição deu certo!
xhr.onreadystatechange = function () {
    //4 é o número que diz que a requisição foi realizada com sucesso!
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}

//Promises
//São funções que retornam valor só depois de um tempo, ou seja, 
// é um objeto usado para processamento assíncrono. 

var minhaPromise = function () {
    //Resolve retorna quando a função executa com sucesso
    // Reject retorna quando a função executa com algum erro!
    return new Promise(function (resolve, reject) {
        xhr.open('GET', 'https://api.github.com/users/PBrunoCyber');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject("Erro na requisição");
                }
            }
        }
    });
}

//Como fazer para executar uma função que tem promisse
minhaPromise()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });

//Usar o AXIOS para realizar requisições assíncronas no JAVASCRIPT
axios.get('htpps://api.github.com/users/PBrunoCyber')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });;
