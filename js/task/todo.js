let list = document.querySelector('.tasks-list');
let dataList = []
let id = 0

document.forms.addTask.onsubmit = function() {
    let task = this.task.value;
    let createTask = document.createElement('li');
    createTask.innerHTML(`${task}`)
    dataList.push(`${task}`)
    list.append(createTask);
}