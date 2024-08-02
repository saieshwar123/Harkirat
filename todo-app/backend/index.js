const express = require("express");
const types = require("./types");
const { todo } = require("./db");
const app = express();
const cors=require("cors")

app.use(express.json());

app.use(cors());
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = types.createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Wrong inputs",
    });
    return;
  }
  const create=await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.post("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsePayload = types.updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Wrong inputs",
    });
    return;
  }

  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      $set: {
        completed: true,
      },
    }
  );


  res.json({
    msg: "You mark as completed",
  });
});

app.listen(3000);
