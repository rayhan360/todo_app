// src/TodoForm.js
import { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: { id: Date.now(), text } });
      setText("");
    }
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
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
