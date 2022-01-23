import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          Deya's Dictionary App
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://pensive-goldwasser-b5f98d.netlify.app/index.html"
            target="_blank"
          >
            Deya Shrestha{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
