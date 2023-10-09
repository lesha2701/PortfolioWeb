let todoItems = [];

function addTask(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now()
    }

    todoItems.push(todo);
    renderTodo(todo);   
}

function deleteTodo(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    const todo = {
      deleted: true,
      ...todoItems[index]
    };
    todoItems = todoItems.filter(item => item.id !== Number(key));
    renderTodo(todo);
  }

function renderTodo(todo) {
    const list = document.querySelector('.tasks-list');
    const item = document.querySelector(`[data-key='${todo.id}']`);
    const checked = todo.checked ? 'done' : '';

    if (todo.deleted) {
        item.remove();
        return
      }

    const node = document.createElement('li');
    node.setAttribute('class', `tasks-item ${checked}`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">X</button>
    `
    
    if (item) {
        list.replaceChild(node, item);
    } else {
        list.append(node);
    }
}   

const btn = document.querySelector('.create-task__button');
btn.addEventListener('click', function() {
    let input = document.getElementById('create-task__text');

    if (input.value !== '') {
        addTask(input.value);
        console.log(todoItems);
        input.value = '';
    }
})

const list = document.querySelector('.tasks-list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});
