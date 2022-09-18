export const addToDo = (value) => {
  let listItem = document.createElement("li");
  let listBtn = document.createElement("button");
  let toDoCheck = document.createElement("input");

  listItem.classList.add("listItem");
  listBtn.classList.add("btn-dark", "btn", "listBtn");
  toDoCheck.classList.add("toDoCheck", "form-check-input");

  listItem.innerHTML = `<span class = "listItem__text">${value}</span>`;
  listBtn.innerHTML = "Delete";
  toDoCheck.type = "checkbox";

  list.append(listItem);
  listItem.append(listBtn);
  listItem.prepend(toDoCheck);
};
