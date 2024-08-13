// src/TodoForm.js
import { useState, useContext, useEffect } from "react";
import { TodoContext } from "./TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");

  useEffect(() => {
    if (state.editingTodo) {
      setText(state.editingTodo.text);
    }
  }, [state.editingTodo]);

  const handleAddOrUpdateTodo = () => {
    if (text.trim()) {
      if (state.editingTodo) {
        dispatch({
          type: "UPDATE_TODO",
          payload: { ...state.editingTodo, text },
        });
      } else {
        dispatch({ type: "ADD_TODO", payload: { id: Date.now(), text } });
      }
      setText("");
    }
  };

  const handleCancelEdit = () => {
    setText("");
    dispatch({ type: "SET_EDITING_TODO", payload: null });
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="border p-2 flex-grow rounded-l-lg"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 rounded-r-lg"
        onClick={handleAddOrUpdateTodo}
      >
        {state.editingTodo ? "Update" : "Add"}
      </button>
      {state.editingTodo && (
        <button
          className="bg-gray-500 text-white px-4 ml-2 rounded-lg"
          onClick={handleCancelEdit}
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default TodoForm;
