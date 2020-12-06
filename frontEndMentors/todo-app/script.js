const button = document.querySelector(".form-button");
const input = document.querySelector(".create");
const todoList = document.querySelector(".todo-list");
const form = document.querySelector(".form");
const filterOption = document.querySelector(".filter-todo");
const count = document.querySelector('.count');
const refresh = document.querySelector('.refresh');
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

function addTodo(event) {
  event.preventDefault();
  if (!input.value) {
    alert("Enter a to-do");
    return;
  }
  //New Div TODO
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
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
    if (todos[i].classList.contains("completed")){
      todos[i].remove();
    }
  }
}