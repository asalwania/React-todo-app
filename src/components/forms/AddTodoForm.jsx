import { Button, Input, Tooltip } from "@mui/material";
import React from "react";
import { addDoc } from "@firebase/firestore";

import { todosRef } from "../../config/firebase.config";
import { AddCircleOutline } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { getTodosData } from "../../redux/slices/todos.slice";

const AddTodoForm = () => {
  const [todoInput, setTodoInput] = React.useState("");
  const dispatch = useDispatch();

  //   create todo list
  const createTodo = async (e) => {
    e.preventDefault();

    const res = await addDoc(todosRef, {
      todo: todoInput,
      category: "inprogress",
      date: new Date(),
    });
    // clear input state after adding todo
    if (res) {
      setTodoInput("");
      dispatch(getTodosData());
    }
  };

  return (
    <form style={{ marginTop: "20px" }} onSubmit={createTodo}>
      <Input
        type="text"
        placeholder="Enter todo..."
        onChange={(e) => setTodoInput(e.target.value)}
        value={todoInput}
      />
      <Tooltip title="Add Todo">
        <Button type="submit">
          <AddCircleOutline type="submit" />
        </Button>
      </Tooltip>
    </form>
  );
};

export default AddTodoForm;
