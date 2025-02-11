import "./App.css";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
      <h1>Welcome to React + TypeScrypt</h1>
      <Greeting name="Ali" />
      <Greeting name="Mehdi" />

      <hr />

      <h2>User List</h2>
      <UserCard name="Ali" age={25} />
      <UserCard name="Sara" age={30} />
    </div>
  );
}

export default App;
