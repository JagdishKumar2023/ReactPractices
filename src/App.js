import { useReducer } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoReducer } from "./components/TodoReducer";

function App() {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
