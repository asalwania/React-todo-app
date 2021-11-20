import { Edit } from "@mui/icons-material";
import { IconButton, MenuItem, Select, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";
import { StyledTableCell, StyledTableRow } from "./todos.styles";
import { doc, updateDoc, deleteDoc } from "@firebase/firestore";

import { db } from "../../config/firebase.config";
import { useDispatch } from "react-redux";
import { getTodosData } from "../../redux/slices/todos.slice";

const TodoRow = ({ todo }) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const dispatch = useDispatch();

  const updateTodo = async (id, e) => {
    const todosDoc = doc(db, "todos", id);
    const newCategory = { category: e.target.value };
    await updateDoc(todosDoc, newCategory);
    dispatch(getTodosData());
    setOpenEdit(false);
  };

  const deleteTodo = async (id) => {
    const todosDoc = doc(db, "todos", id);
    await deleteDoc(todosDoc);
    dispatch(getTodosData());
  };

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {todo.todo}
      </StyledTableCell>
      <StyledTableCell align="right">
        {openEdit ? (
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={todo.category}
            onChange={(e) => updateTodo(todo.id, e)}
            label="Age"
          >
            <MenuItem value={"Pending"}>Pending</MenuItem>
            <MenuItem value={"Abandon"}>Abandon</MenuItem>
            <MenuItem value={"Completed"}>Completed</MenuItem>
            <MenuItem value={"Inprogress"}>Inprogress</MenuItem>
          </Select>
        ) : (
          todo.category
        )}
      </StyledTableCell>
      <StyledTableCell align="right">
        <Tooltip title="Edit">
          <IconButton onClick={() => setOpenEdit(!openEdit)}>
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </Tooltip>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default TodoRow;
