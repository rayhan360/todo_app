// src/TodoList.js
import { useContext } from 'react';
import { TodoContext } from './TodoProvider';


const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <ul>
      {state.todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center mb-2">
          <span>{todo.text}</span>
          <div>
            <button
              className="text-blue-500 mr-2"
              onClick={() => dispatch({ type: 'SET_EDITING_TODO', payload: todo })}
            >
              Edit
            </button>
            <button
              className="text-red-500"
              onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
