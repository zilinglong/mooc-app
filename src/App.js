import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NameCard from "./components/NameCard";
import LikesButton from "./components/LikesButton";
import DigitalClock from "./components/DigitalClock";
import CommentBox from "./components/CommentBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NameCard name="king" tel={123} isHuman tags={["恐龙", "足球小子"]} />
      <LikesButton />
      <DigitalClock />
      <CommentBox />
    </div>
  );
}

export default App;
