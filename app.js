//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');

const todoList = document.querySelector('.todo-list');




//event listener
todoButton.addEventListener('click', addItem);
 
//function
function addItem(event) {
    //prevent form submitting
    event.preventDefault();

    //create div ---> create li --> create detele btn ---> create checked
    const divItem = document.createElement('div');
    divItem.classList.add('todo-item');

    const liTodoThing = document.createElement('li');
    liTodoThing.classList.add('todo-thing');
    liTodoThing.innerText = 'hello';

    divItem.appendChild(liTodoThing);

    //create check & delete button
    
    const checkedButton = document.createElement('button');
    checkedButton.innerHTML = '<i class="fas fa-check"></i>';
    divItem.appendChild(checkedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-check"></i>';
    divItem.appendChild(deleteButton);
    //set classname
    
    
}