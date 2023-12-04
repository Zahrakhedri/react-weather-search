import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
      </div>
      <span className="source">
        This project was coded by Zahra Khedri and is {""}
        <a href="https://github.com/Zahrakhedri/react-weather-search">
          open-sourced on GitHub
        </a>
      </span>
    </div>
  );
}

export default App;
