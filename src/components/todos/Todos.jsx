import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getDocs } from "@firebase/firestore";

import NavBar from "../toolbar/NavBar";
import { todosRef } from "../../config/firebase.config";
import TodoRow from "./TodoRow";
import AddTodoForm from "../forms/AddTodoForm";
import { StyledTableCell } from "./todos.styles";

import { useDispatch, useSelector } from "react-redux";
import { getTodosData } from "../../redux/slices/todos.slice";

export default function Todos() {
  const dispatch = useDispatch();
  const { status, todos } = useSelector((state) => state.rootReducer.todo);
  console.log(status, todos);

  //   async function getTodos() {
  //     const resData = await getDocs(todosRef);
  //     setTodoData(resData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   }

  //   fetch todos data
  React.useEffect(() => {
    dispatch(getTodosData());
  }, [dispatch]);

  return (
    <>
      <TableContainer component={Paper} sx={{ width: "80%", margin: "auto" }}>
        {/* navbar */}
        <NavBar />
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tasks</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* todos list */}
            {todos.map((todo) => (
              <TodoRow key={todo.id} todo={todo} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* add todo form */}
      <AddTodoForm />
    </>
  );
}
