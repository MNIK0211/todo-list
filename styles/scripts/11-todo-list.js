const todoList= [{
  name:'wash dishes',
  dueDate: '03-09-2026'
}, {
  name: 'make dishes',
  dueDate:'03-09-2026'}];

renderTodoList();


function renderTodoList(){
let todoListHTML = '';

for(let i = 0; i<todoList.length; i++){
  const todoobject = todoList[i];
  //const name = todoobject.name;
  //const dueDate = todoobject.dueDate;
  const {name, dueDate} = todoobject;
  const html = `
  <div>${name}</div>
  <div> ${dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
  "class = "delete-todo-button">Delete</button>

`;
todoListHTML += html;
}


document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;
}



function addTodo(){
  const inputElement= document.querySelector('.js-name-input');
  const name  = inputElement.value;

const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });


  inputElement.value='';

  renderTodoList();
}


