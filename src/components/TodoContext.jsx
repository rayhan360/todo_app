import { createContext, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    case "EDIT_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
