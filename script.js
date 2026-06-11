const todo = []
const form = document.getElementById('form');
let todoInput
form.addEventListener('submit', function(prevR) {
    prevR.preventDefault();
    newTodo();
});
function newTodo() {
    todoAdd();
    todo.splice(0, 0, todoInput);
    document.querySelector('.todoList').innerHTML = todo.join("");
    console.log(todo)
    document.getElementById('todoInput').value = ""
};
function todoAdd() {
    todoInput = `<div class="todo">
        <input type="checkbox">
        ${document.getElementById('todoInput').value}
        <button>
            <img src="images/icon-cross.svg">
        </button>
    </div>`
}

