const todo = []
const todoCompleted = []
const todoActive = []
const form = document.getElementById('form');
let todoInput
let todoId
form.addEventListener('submit', function(prevR) {
    prevR.preventDefault();
    todoInput = document.getElementById('todoInput').value;
    console.log(todoInput);
    if (!todoInput || !todoInput.trim().length) {
        return false;
    } else {
        newTodo();
        document.getElementById('todoInput').value = "";
    }
});



function newTodo() {
    todoAdd();
    todoActive.splice(0, 0, todoInput);
    todo.splice(0, 0, todoInput);
    document.querySelector('#todoList').innerHTML = todo.join("");
};
function todoAdd() {
    todoInput = `<div id="todo${todo.length}" class="todo">
        <input type="checkbox">
        ${todoInput}
        <button onclick="todoRemove('${todo.length}')">
            <img src="images/icon-cross.svg">
        </button>
    </div>`
};
function todoRemove(todoId) {
    document.getElementById(`todo${todoId}`).outerHTML = null;
    todo.splice(`${todoId}`, 1);
    document.querySelector('#todoList').innerHTML = todo.join("");
}

