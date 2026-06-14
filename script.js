let nextId = 0;
const todo = [];
const form = document.getElementById('form');
let todosActiveCount = 0
todoActive();
let todoCompleted
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
    todo[todo.length] = {id:nextId, text:todoInput, completed:false};
    document.getElementById('todoList').innerHTML += `
    <div id="${nextId}" class="todo">
        <input type="checkbox" onclick="todoCheck(${nextId})">
        ${todoInput}
        <button onclick="todoRemove('${nextId}')">
            <img src="images/icon-cross.svg">
        </button>
    </div>
    `
    ++nextId;
    ++todosActiveCount;
    todoActive()
    console.log(todo); 
};
function todoRemove(todoId) {
    document.getElementById(todoId).outerHTML = null
    todo.splice(todo.findIndex(item => item.id == todoId), 1)
    console.log(todo)
    todosActiveCount = todo.filter(item => item.completed != true).length
    todoActive()
}
function clearCompleted() {
    todoCompleted = todo.filter(item => item.completed != true);
    console.log(todoCompleted);
    while (todo !== todoCompleted) {
        document.querySelector('.completed').outerHTML = null;
        todo.splice(todo.findIndex(item => item.completed == true), 1);
        console.log(todo);
    };
    todosActiveCount = todoCompleted.length;
    todoActive()
    console.log(todo);
}
function todoCheck(todoId) {
    todo.map(item => {
        if (item.id == todoId && item.completed == false) {
            item.completed = true;
            document.getElementById(todoId).classList.add('completed');
            --todosActiveCount;
            todoActive()
        } else if (item.id == todoId && item.completed == true) {
            item.completed = false;
            document.getElementById(todoId).classList.remove('completed');
            ++todosActiveCount
            todoActive()
        }
    });
    console.log(todo)
}
function todoActive() {
    document.getElementById('todoActive').innerHTML = todosActiveCount + " ";
}
function filterAll() {

}
function filterActive() {

}
function filterCompleted() {
    
}