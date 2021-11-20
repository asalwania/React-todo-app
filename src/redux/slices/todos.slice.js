import { getDocs } from "@firebase/firestore";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { todosRef } from "../../config/firebase.config";

export const getTodosData = createAsyncThunk("todos/getTodosData", async () => {
  const resData = await getDocs(todosRef);
  const todosData = resData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return todosData;
});

const initialState = {
  todos: [],
  status: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodosData: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: {
    [getTodosData.pending]: (state, action) => {
      state.status = "loading";
    },
    [getTodosData.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.status = "success";
    },
    [getTodosData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { setTodosData } = todosSlice.actions;
export const selectedTodo = (state) => state;
export default todosSlice.reducer;
