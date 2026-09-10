const todoList= [{
  name:'wash dishes',
  dueDate: '03-09-2026'
}, {
  name: 'make dishes',
  dueDate:'03-09-2026'}];

renderTodoList();


function renderTodoList(){
let todoListHTML = '';

todoList.forEach(function(todoobject,index){
  const {name, dueDate} = todoobject;
  const html = `
  <div>${name}</div>
  <div> ${dueDate}</div>
    <button onclick="
    todoList.splice(${index}, 1);
    renderTodoList();
  "class = "delete-todo-button">Delete</button>

`;
todoListHTML += html;

});
}


