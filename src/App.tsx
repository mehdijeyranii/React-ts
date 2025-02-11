import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ImageUser from "./assets/01.avif";

function App() {
  return (
    <div>
      <h1>Welcome to React + TypeScrypt</h1>
      <h2>User Profiles</h2>
      <ProfileCard name="Ali" role="Frontend Developer" imageUrl={ImageUser} />
      <ProfileCard name="Sara" role="UI/UX Designer" imageUrl={ImageUser} />
    </div>
  );
}

export default App;
