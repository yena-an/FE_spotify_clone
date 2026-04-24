import Header from "./layouts/Header";
import LeftBar from "./layouts/LeftSideBar";
import PlayerBar from "./layouts/PlayerBar";
import HomePage from "./layouts/HomePage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <LeftBar />
        <main className="app__main">
          <HomePage />
        </main>
      </div>
      <PlayerBar />
    </div>
  );
}

export default App;
