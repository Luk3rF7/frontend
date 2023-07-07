let input = document.getElementById("input-principal");
let button = document.getElementById("botao-adicionar");
let addTask = document.getElementById("tarefas")

//const para adiciona 
let taskArray = [];

function clickButton(){
    //usando push para pega valor do input
    taskArray.push(input.value)
    createTask()
}


function createTask(){
    let newTask = ""

    taskArray.forEach(task => {
        newTask = newTask + `
        <li class="item-tarefa">
        <p>${task}</p> 
        </li>
        `
    })
    addTask.innerHTML = newTask;
}

button.addEventListener("click",clickButton)
