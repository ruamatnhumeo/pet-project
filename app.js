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
    const input = todoInput.textContent;
    //create div ---> create li
    const divItem = document.createElement('div');
    divItem.classList.add('todo-item');

    const liTodoThing = document.createElement('li');
    liTodoThing.classList.add('todo-thing');
    liTodoThing.innerText = 'input';

    divItem.appendChild(liTodoThing);

    //create check & delete button
    const checkedButton = document.createElement('button');
    checkedButton.classList.add('checked-button');
    checkedButton.innerHTML = '<i class="fas fa-check"></i>';
    divItem.appendChild(checkedButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    divItem.appendChild(deleteButton);

    //append to list
    todoList.appendChild(divItem);
    
}