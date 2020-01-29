/* function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            idade > 18 ? resolve() : reject();
        }, 2000);
    });
}


checaIdade(20)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });
 */

var buttonClick = document.querySelector('button.btn');
var listElement = document.querySelector('ul');
var xhr = new XMLHttpRequest();
function acessaGitHub() {
    return new Promise(function (resolve, reject) {
        buttonClick.onclick = () => {
            var inputValue = document.querySelector('input');
            var text = inputValue.value;
            xhr.open('GET', 'https://api.github.com/users/' + text + '/repos');
            xhr.send(null);
            carregar();

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    xhr.status === 200 ? resolve(JSON.parse(xhr.responseText)) : reject("Página não encontrada!");
                }
            }
        }
    });
}

function mostraNaTela(resposta) {
    if (resposta === "Página não encontrada!") {
        var li = document.createElement('li');
        li.append("Página não encontrada! 404");
        listElement.appendChild(li);
    } else {
        for (repo of resposta) {
            var li = document.createElement('li');
            var text = document.createTextNode(repo.name);
            li.appendChild(text);
            listElement.appendChild(li);
        }
    }

}

function carregar() {
    var i = document.createElement('li');
    i.innerHTML = "";
    i.setAttribute("id", "load");
    var text = document.createTextNode('carregando....');
    i.appendChild(text);
    listElement.appendChild(i);
}

function none() {
    var list = document.getElementById("load");
    list.style.display = 'none';
}

acessaGitHub()
    .then(function (response) {
        mostraNaTela(response);
        none();
    }).catch(function (error) {
        none();
        mostraNaTela(error);
    });


