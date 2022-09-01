let todos = [];

initialize();

function initialize() {
  getTodos();
}

function getTodos() {
  const serverUrl = "http://localhost:3000/todos";
  return fetch(serverUrl)
    .then((response) => response.json())
    .then((serverTodos) => {
      serverTodos.forEach((serverTodo) => {
        addToTodo(serverTodo.taskName, serverTodo.id);
        addToList(serverTodo.taskName, serverTodo.id);
      });
    });
}

function onAdd() {
  // const taskName = document.getElementById("task-name").value;
  addTodoToServer().then(() =>
    getTodos().then(() =>
      console.log("Added todo to server and re-fetched all todos")
    )
  );
}

function addTodoToServer() {
  return fetch("http://localhost:3000/todo", {
    method: "POST",
  });
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
