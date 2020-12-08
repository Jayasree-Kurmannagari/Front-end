const button = document.querySelector(".form-button");
const input = document.querySelector(".create");
const todoList = document.querySelector(".todo-list");
const toDolist = document.querySelectorAll('.todo-list');
const form = document.querySelector(".form");
const filterOption = document.querySelector(".filter-todo");
const count = document.querySelector('.count');
const refresh = document.querySelector('.refresh');
const mode = document.querySelector('.mode');
const list = document.querySelector('.footer-list');
let darkMode = false;
let total = 0;
var btns = document.querySelectorAll(".btn");
   Array.from(btns).forEach(item => {
      item.addEventListener("click", () => {
         var selected = document.getElementsByClassName("active");
         selected[0].className = selected[0].className.replace(" active", "");
         item.className += " active";
      });
   });
form.addEventListener("submit", addTodo);
button.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
refresh.addEventListener("click",clear);
mode.addEventListener("click",change);


function addTodo(event) {
  event.preventDefault();
  if (!input.value) {
    alert("Enter a to-do");
    return;
  }
  //New Div TODO
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.classList.add('draggable');
  todoDiv.setAttribute('draggable',true);

  //Circle button
  const completedButton = document.createElement("div");
  completedButton.innerHTML = '<i class="far fa-circle"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  var check = false;
  var firstTime = true;
  //New LI
  const newTodo = document.createElement("li");
  newTodo.innerText = input.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);


  //Trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  input.value = "";
  total++;
  count.innerHTML = `${total} items left`;
  if(darkMode){
    todoDiv.classList.add('dark-todo');
    completedButton.classList.add('dark-button');
    trashButton.classList.add('dark-button');
  }
  else{
    todoDiv.classList.remove('dark-todo');
    completedButton.classList.remove('dark-button');
    trashButton.classList.remove('dark-button');
  }
  //Drag
  const draggables = todoList.childNodes;
for(let i=1;i<draggables.length;i++){
  draggables[i].addEventListener('dragstart',()=>{
    draggables[i].classList.add('dragging');
  });
  draggables[i].addEventListener('dragend',()=>{
    draggables[i].classList.remove('dragging');
  });
}
toDolist.forEach(todolist => {
  todolist.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(todolist, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      todolist.appendChild(draggable)
    } else {
      todolist.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(todolist, y) {
  const draggableElements = [...todolist.querySelectorAll('.draggable:not(.dragging)')]
  console.log(draggableElements);
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

  //Todo completed function
  completedButton.addEventListener("click", () => {
    if (!check || firstTime) {
      completedButton.classList.add("hide");
      todoDiv.classList.add("completed");
      completedButton.innerHTML = "";
      const image = document.createElement("img");
      image.setAttribute("src", "./images/icon-check.svg");
      image.classList.add("check-img");
      completedButton.appendChild(image);
      total--;
  count.innerHTML = `${total} items left`;
      check = true;
      firstTime = false;
    } else {
      completedButton.classList.remove("hide");
      todoDiv.classList.remove("completed");
      completedButton.innerHTML = '<i class="far fa-circle"></i>';
      total++;
  count.innerHTML = `${total} items left`;
      check = false;
    }
  });
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    console.log(todo);
    todo.remove();
    total--;
    count.innerHTML = `${total} items left`;
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(todos);
  for (let i = 1; i < todos.length; i++) {
    switch (e.target.innerText) {
      case "All":
        todos[i].style.display = "flex";
        break;
      case "Active":
        if(todos[i].classList.contains("completed"))
          todos[i].style.display='none';
        else todos[i].style.display = 'flex';
        break;
      case "Completed":
        if (todos[i].classList.contains("completed"))
          todos[i].style.display = "flex";
        else todos[i].style.display = "none";
    }
  }
}

function clear(e){
  const todos = todoList.childNodes;
  for(let i = 1; i < todos.length; i++){
    console.log(todos[i]);
    if (todos[i].classList.contains("completed")){
      todos[i].remove();
    }
  }
}

function change(e){
  const header = document.querySelector('.header');
  const todos = todoList.childNodes;
  if(!darkMode){
    darkMode = true;
  document.getElementsByTagName('body')[0].classList.add('dark');
  mode.setAttribute('src','./images/icon-sun.svg');
  header.classList.add('dark-mode');
  input.classList.add('dark-form');
  for(let i=1; i<todos.length;i++){
    todos[i].classList.add('dark-todo');
    todos[i].firstChild.classList.add('dark-button');
    todos[i].lastChild.classList.add('dark-button');
  }
  list.classList.add('dark-footer');
}
else{
  mode.setAttribute('src','./images/icon-moon.svg');
  document.getElementsByTagName('body')[0].classList.remove('dark');
  header.classList.remove('dark-mode');
  input.classList.remove('dark-form');
  for(let i=1; i<todos.length;i++){
    todos[i].classList.remove('dark-todo');
    todos[i].firstChild.classList.remove('dark-button');
    todos[i].lastChild.classList.remove('dark-button');
  }
  list.classList.remove('dark-footer');
  darkMode = false;
}

}
