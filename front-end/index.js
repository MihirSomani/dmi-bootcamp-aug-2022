let todos = [];

setInterval(() => {
  console.log("todos", todos);
}, 1000);

initialize();

function initialize() {
  getTodos();
}

function getTodos() {
  // Call the server on GET /todos
  const serverUrl = "http://localhost:3000/todos";
  fetch(serverUrl)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((res) => {
      todos = res;
      console.log("Todos should be set to server response");
    })
    .catch((error) => console.error("ERROR!!!!"));
}

setTimeout(() => {
  while (true) {}
}, 10000);

function onAdd() {
  const id = randomIntFromInterval(10000000000000);
  const taskName = document.getElementById("task-name").value;
  addToTodo(taskName, id);
  addToList(taskName, id);
}

function addToTodo(taskName, id) {
  todos.push({
    id: id,
    taskName: taskName,
  });
}

function addToList(taskName, id) {
  const todoListNode = document.getElementById("todo-list");
  todoListNode.appendChild(createListItem(taskName, id));
}

function createListItem(taskName, id) {
  const li = document.createElement("li");
  li.id = id;
  li.appendChild(createTextNode(taskName));
  li.appendChild(createDeleteButton(id));
  return li;
}

function createTextNode(taskName) {
  return document.createTextNode(taskName);
}

function createDeleteButton(id) {
  const button = document.createElement("button");
  button.onclick = onDelete.bind(this, id);
  button.appendChild(document.createTextNode("Delete"));
  return button;
}

function onDelete(id) {
  todos = todos.filter((todo) => todo.id !== id);
  document.getElementById(id).remove();
}

function randomIntFromInterval(max) {
  return Math.floor(Math.random() * (max + 1));
}
