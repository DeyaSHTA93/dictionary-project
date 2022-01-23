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
        <footer className="App-footer">Coded by Deya Shrestha</footer>
      </div>
    </div>
  );
}
