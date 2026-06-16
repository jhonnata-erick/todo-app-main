let nextId = 0;
const todo = [];
const form = document.getElementById('form');
let todosActiveCount = 0
todoActive();
let todoCompleted
let todoInput
let todoId
let todofilter
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
    <div id="${nextId}" class="todo uncompleted">
        <button class="" onclick="todoCheck(${nextId})"><div class="check"></div></button>
        ${todoInput}
        <button class="cross" onclick="todoRemove('${nextId}')">
            <img src="images/icon-cross.svg">
        </button>
    </div>
    `
    ++nextId;
    ++todosActiveCount;
    todoActive()
    console.log(todo);
    if (document.querySelector('.todoList').classList.contains('dark')) {
        document.querySelectorAll('.todo').forEach(tododark => {tododark.classList.add('dark')})
        document.querySelectorAll('.todo.completed') != null ? document.querySelectorAll('.todo.completed').forEach(tododark => {tododark.classList.add('dark')}) : false;
    } else {
        document.querySelectorAll('.todo').forEach(todolight => {todolight.classList.remove('dark')})
        document.querySelectorAll('.todo.completed') != null ? document.querySelectorAll('.todo.completed').forEach(todolight => {todolight.classList.add('dark')}) : false;
    }
    document.getElementById('todoInput').value = "";
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
            document.getElementById(todoId).classList.remove('uncompleted');
            --todosActiveCount;
            todoActive()
        } else if (item.id == todoId && item.completed == true) {
            item.completed = false;
            document.getElementById(todoId).classList.remove('completed');
            document.getElementById(todoId).classList.add('uncompleted');
            ++todosActiveCount
            todoActive()
        }
    });
    switch (todofilter) {
        case "active":
            filterActive();
            break;
        case "complete":
            filterCompleted();
            break;
        default:
            filterAll;
    };
    console.log(todo)
}
function todoActive() {
    document.getElementById('todoActive').innerHTML = todosActiveCount + " ";
}
function filterAll() {
    document.querySelectorAll('.todo').forEach(allTodo => {
        allTodo.style.display = 'flex';
    });
    document.querySelector('#all').classList.add('active');
    document.querySelector('#active').classList.remove('active');
    document.querySelector('#complete').classList.remove('active');
    todofilter = "all"
}
function filterActive() {
    filterAll()
    document.querySelectorAll('.completed').forEach(completeTodo => {
        completeTodo.style.display = 'none';
    });
    document.querySelector('#all').classList.remove('active');
    document.querySelector('#active').classList.add('active');
    document.querySelector('#complete').classList.remove('active');
    todofilter = "active"
}
function filterCompleted() {
    filterAll()
    document.querySelectorAll('.uncompleted').forEach(uncompleteTodo => {
        uncompleteTodo.style.display = 'none';
    });
    document.querySelector('#all').classList.remove('active');
    document.querySelector('#active').classList.remove('active');
    document.querySelector('#complete').classList.add('active');
    todofilter = "complete"
}
const theme = document.getElementById('themeSwitcher');
function themeSwitch() {
    if (theme.innerHTML == `<img class="darkthemebutton" src="images/icon-moon.svg">`) {
    theme.innerHTML = `<img class="lightthemebutton" src="images/icon-sun.svg">`;
    document.body.classList.add('dark');
    document.querySelectorAll('.filter').forEach(tododark => {
            tododark.classList.add('dark');
        });
    document.querySelector('button').classList.add('dark');
    document.querySelector('.todoInfo button').classList.add('dark');
    document.querySelector('input').classList.add('dark');
    document.querySelector('.newTodo').classList.add('dark');
    document.querySelector('.todoList').classList.add('dark');
    document.querySelector('.todoInfo').classList.add('dark');
    document.querySelector('.todoFilters').classList.add('dark');
        document.querySelectorAll('.todo').forEach(tododark => {
            tododark.classList.add('dark');
        });
    } else {
        theme.innerHTML = `<img class="darkthemebutton" src="images/icon-moon.svg">`;
    document.body.classList.remove('dark');
    document.querySelectorAll('.filter').forEach(tododark => {
            tododark.classList.remove('dark');
        });
    document.querySelector('button').classList.remove('dark');
    document.querySelector('.todoInfo button').classList.remove('dark');
    document.querySelector('input').classList.remove('dark');
    document.querySelector('.newTodo').classList.remove('dark');
    document.querySelector('.todoList').classList.remove('dark');
    document.querySelector('.todoInfo').classList.remove('dark');
    document.querySelector('.todoFilters').classList.remove('dark');
        document.querySelectorAll('.todo').forEach(tododark => {
            tododark.classList.remove('dark');
        });
    }
};