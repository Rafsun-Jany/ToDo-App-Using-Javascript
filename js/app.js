// Write Your Javascript Code here
// Your task is to check
// whether an user is trying to add
// an empty todo into the list
// Also add a search bar to search throygh the todo-list

const ulList = document.querySelector(".todo-list");
const inputField = document.querySelector(".todo-input");
const inputButton = document.querySelector(".todo-button");
const searchBar = document.getElementById("search");
const searchButton = document.getElementById("btn-search");

const taskLeft = function () {
  const countDiv = ulList.getElementsByTagName("div").length;
  const taskDiv = document.querySelector(".count-task");
  const para = taskDiv.getElementsByTagName("p");
  para[0].innerText = countDiv;
};

function addNewTask(event) {
  event.preventDefault();
  if (inputField.value == "") {
    alert("You Cannot Insert Empty Task !!");
  } else {
    const div = document.createElement("div");
    div.classList.add("todo");
    const newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerText = inputField.value;
    div.appendChild(newLi);
    const newBtn = document.createElement("button");
    newBtn.innerHTML = '<i class="fas fa-check"></i>';
    newBtn.classList.add("check");
    const newBtndt = document.createElement("button");
    newBtndt.innerHTML = '<i class="fas fa-trash"></i>';
    newBtndt.classList.add("trash");

    div.appendChild(newBtn);
    div.appendChild(newBtndt);
    ulList.appendChild(div);
    inputField.value = "";

    taskLeft();
  }
}

function addOrRemove(event) {
  const target = event.target;
  if (target.classList == "trash") {
    const parent = target.parentElement;
    parent.remove();
    taskLeft();
  } else if (target.classList[0] == "check") {
    const parent = target.parentElement;
    parent.classList.add("completed");
    target.remove();
    taskLeft();
  }
}

function searchToDo(event) {
  event.preventDefault();
  const searchVal = document.getElementById("search").value.toUpperCase();
  const tod = document.querySelectorAll(".todo");
  for (let i = 0; i < tod.length; i++) {
    const li = tod[i].querySelector(".todo-item");
    const liVal = li.textContent || li.innerText;
    if (liVal.toUpperCase().indexOf(searchVal) > -1) {
      tod[i].style.display = " ";
    } else {
      tod[i].style.display = "none";
    }
  }
  if (searchVal == "") {
    const tod = document.querySelectorAll(".todo");
    for (let i = 0; i < tod.length; i++) {
      tod[i].style.display = "flex";
    }
  }

  taskLeft();
}

inputButton.addEventListener("click", addNewTask);

ulList.addEventListener("click", addOrRemove);

searchButton.addEventListener("click", searchToDo);

searchBar.addEventListener("keyup", searchToDo);
