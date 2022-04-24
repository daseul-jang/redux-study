import {
  configureStore,
  /* createAction,
  createReducer, */
  createSlice,
} from "@reduxjs/toolkit";

// createSlice 사용
const todos = createSlice({
  name: "todosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

export const { add, remove } = todos.actions;

export default configureStore({ reducer: todos.reducer });

// createSlice 미사용
/* const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteTodo]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});

const store = configureStore({ reducer: todos.reducer });

export const actionCreators = {
  addTodo,
  deleteTodo,
}; 

export default store;*/
