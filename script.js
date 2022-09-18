"use strict";
import { addToDo } from "./addtodo.js";
// __________________________________________________________
let userMessage = document.forms.userMessage;
let { textField } = document.forms.userMessage.elements;
let list = document.getElementById("list");
let errorMessage = document.querySelector(".error-message");
// __________________________________________________________
userMessage.onsubmit = (event) => {
  event.preventDefault();
  if (textField.value.trim() === "") {
    textField.classList.add("is-invalid");
    errorMessage.innerHTML = "Please fill out this field";
    return;
  }
  addToDo(textField.value);
  userMessage.reset();
};
// __________________________________________________________
list.addEventListener("click", (event) => {
  let removeBtn = event.target.classList.contains("listBtn");
  if (removeBtn) {
    event.target.closest(".listItem").remove();
  }
});
// __________________________________________________________
list.addEventListener("change", (event) => {
  let checkbox = event.target.classList.contains("toDoCheck");
  let listItem = event.target.closest(".listItem");
  if (checkbox) {
    let isDone = event.target.checked;
    event.target.disabled = isDone;
    listItem.querySelector(".listBtn").disabled = isDone;
    listItem.querySelector(".listItem__text").style.textDecoration =
      "line-through";
  }
});

// __________________________________________________________
textField.oninput = () => {
  if (textField.classList.contains("is-invalid")) {
    textField.classList.remove("is-invalid");
    errorMessage.innerHTML = "";
  }
};
