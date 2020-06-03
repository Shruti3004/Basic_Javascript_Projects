const Addtask = document.querySelector('#add-task');
const taskInput = document.querySelector('#task');
const list = document.querySelector('.list-group');
const clearTask = document.querySelector('#clear-tasks');
const filter = document.querySelector('#filter');

loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getTasks);
    Addtask.addEventListener('click', addTask);
    clearTask.addEventListener('click', clearTasks);
    list.addEventListener('click', removeTask);
    filter.addEventListener('keyup', filterTasks);
};

function getTasks(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.className = 'delete-item ml-5';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        list.appendChild(li);
    });
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task!!');
    }else{
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.className = 'delete-item ml-5';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        list.appendChild(li);
    }
    storeTaskinLS(taskInput.value);
    taskInput.value = '';
    e.preventDefault();
}

function storeTaskinLS(task){
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you Sure?')){
            e.target.parentElement.parentElement.remove();
        }
        removeTaskfromLS(e.target.parentElement.parentElement);
    }   
    e.preventDefault();
}

function removeTaskfromLS(taskItem){
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            task.splice(index,1);
        }
    });
}

function clearTasks(e){
    if(confirm('Are you Sure?')){
        list.innerHTML = '';
    }
    clearTasksFromLS();
}

function clearTasksFromLS(){
    localStorage.clear();
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.list-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}