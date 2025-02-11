import "./App.css";
import TodoList from "./components/TodoList";

const todos = [
  { task: "Learn React", completed: true },
  { task: "Practice TypeScript", completed: false },
  { task: "Build a project", completed: false },
];

function App() {
  return (
    <div>
      <h1>Welcome to React + TypeScript</h1>
      <h2>My To-Do List</h2>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
