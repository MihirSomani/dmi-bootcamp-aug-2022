let todos: { taskName: string; id: string }[] = [];

initialize();

function initialize() {
  getTodos();
}

function getTodos() {
  const serverUrl = "http://localhost:3000/todos";
  return fetch(serverUrl)
    .then((response) => response.json())
    .then((serverTodos: { taskName: string; id: string }[]) => {
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

function addToTodo(taskName: string, id: string) {
  todos.push({
    id: id,
    taskName: taskName,
  });
}

function addToList(taskName: string, id: string) {
  const todoListNode = document.getElementById("todo-list");
  if (todoListNode === null) {
    console.error("WTF?");
  } else {
    todoListNode.appendChild(createListItem(taskName, id));
  }
}

function createListItem(taskName: string, id: string) {
  const li = document.createElement("li");
  li.id = id;
  li.appendChild(createTextNode(taskName));
  li.appendChild(createDeleteButton(id));
  return li;
}

function createTextNode(taskName: string) {
  return document.createTextNode(taskName);
}

function createDeleteButton(this: any, id: string) {
  const button = document.createElement("button");
  button.onclick = onDelete.bind(this, id);
  button.appendChild(document.createTextNode("Delete"));
  return button;
}

function onDelete(id: string) {
  todos = todos.filter((todo) => todo.id !== id);
  document.getElementById(id)?.remove();
}

function randomIntFromInterval(max: number) {
  return Math.floor(Math.random() * (max + 1));
}
