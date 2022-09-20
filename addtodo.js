export const addToDo = (value) => {
  let listItem = document.createElement("li");
  let listBtn = document.createElement("button");
  let toDoCheck = document.createElement("input");

  listItem.classList.add("list-item");
  listBtn.classList.add("btn-dark", "btn", "list-btn");
  toDoCheck.classList.add("todo-check", "form-check-input");

  listItem.innerHTML = `<span class = "list-item-text">${value}</span>`;
  listBtn.innerHTML = "Delete";
  toDoCheck.type = "checkbox";

  list.append(listItem);
  listItem.append(listBtn);
  listItem.prepend(toDoCheck);
};
