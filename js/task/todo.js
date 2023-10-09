let todoItems = [];

function addTask(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now()
    }

    todoItems.push(todo);
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

