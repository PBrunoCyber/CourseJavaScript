var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('todo_items')) || [];

function renderizarTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var buttonExcluir = document.createElement('button');

        var text = document.createTextNode("Excluir");
        buttonExcluir.appendChild(text);
        buttonExcluir.style.marginLeft = '20px';

        var pos = todos.indexOf(todo);
        buttonExcluir.setAttribute('onclick', 'excluirElement(' + pos + ')');

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        todoElement.appendChild(buttonExcluir);
    }
}
renderizarTodos();

function addTodo() {
    var inputText = inputElement.value;
    todos.push(inputText);
    renderizarTodos();
    inputElement.value = "";
    saveToStorage();
}

buttonElement.onclick = addTodo;

function excluirElement(num) {
    todos.splice(num, 1);
    renderizarTodos();
    saveToStorage();
}

//Armazenar os dados no local storage
function saveToStorage() {
    localStorage.setItem('todo_items', JSON.stringify(todos));
}
