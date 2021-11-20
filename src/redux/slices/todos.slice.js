import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: "",
  category: "",
  date: new Date(),
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
      
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
