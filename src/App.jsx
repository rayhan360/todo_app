import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./components/TodoProvider";

function App() {
  return (
    <>
      <TodoProvider>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
