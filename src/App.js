import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NameCard from "./components/NameCard";
import LikesButton from "./components/LikesButton";
import DigitalClock from "./components/DigitalClock";
import CommentBox from "./components/CommentBox";
import RefCommentBox from "./components/RefCommentBox";
import CommentList from "./components/CommentList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: ["this is first comments", "this is 2th comments", "this is 3th comments", "this is 4th comments"]
    };
    this.addComment = this.addComment.bind(this);
  }
  addComment(data) {
    console.log("app addComment");
    console.log("data:", data);
    this.setState({
      comments: [...this.state.comments, data]
    });
  }
  render() {
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
        <CommentBox
          commentsLength={this.state.comments.length}
          onAddComment={this.addComment}
        />
        <RefCommentBox />
        {/* <CommentList comments={["大家好", "woshi", "dkdf"]} /> */}
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
