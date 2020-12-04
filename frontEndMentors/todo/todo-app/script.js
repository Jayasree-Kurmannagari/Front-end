const button = document.querySelector(".form-button");
const input = document.querySelector(".create");
const todoList = document.querySelector(".todo-list");
const form = document.querySelector('.form');
form.addEventListener('submit', addTodo);
button.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();
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
 //Todo completed function
  completedButton.addEventListener("click", () => {
    if(!check || firstTime){
      completedButton.classList.add("hide");
      completedButton.innerHTML = "";
      const image = document.createElement('img');
       image.setAttribute('src','./images/icon-check.svg');
    image.classList.add('check-img');
      completedButton.appendChild(image);
      console.log(check,firstTime);
      check = true;
      firstTime = false
      }
      else{
        completedButton.classList.remove('hide');
        console.log(check,firstTime);
        completedButton.innerHTML = '<i class="far fa-circle"></i>';
        check = false;
      }
  });
}

