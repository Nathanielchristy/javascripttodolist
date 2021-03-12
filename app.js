//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//EventListners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click", deleteCheck);


//functions

function addTodo(event){
    //prevent form from submission
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
   //Check mark button

   const completedbutton =document.createElement('button');
   completedbutton.innerHTML = '<i class="fas fa-check"></i>';
   completedbutton.classList.add("complete-btn");
   todoDiv.appendChild(completedbutton);
    //Check Trash button

    const trashbutton =document.createElement('button');
    trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
    trashbutton.classList.add("trash-btn");
    todoDiv.appendChild(trashbutton);

    //Append to dolist
    todoList.appendChild(todoDiv);

    //clear to do list
    todoInput.value="";

 

}
function deleteCheck(e) {
    const item = e.target;
    //delete todo

    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });

    }               
    //Check mark
    if(item.classList[0] === "complete-btn"){
        const todo =item.parentElement;
        todo.classList.toggle("completed")
    }                                       
}