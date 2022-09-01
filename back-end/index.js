const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;

app.get("/todos", (req, res) => {
  setTimeout(() => {
    res.send([
      { id: "1", taskName: "Task 1" },
      { id: "2", taskName: "Task 2" },
      { id: "3", taskName: "Task 3" },
    ]);
  }, 5000);
});

app.post("/todo", (req, res) => {
  res.send("Hello World!");
});

// DELETE /todo/1234
app.delete("/todo/:id", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
