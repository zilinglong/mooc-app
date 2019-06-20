import React from "react";
class Welcome extends React.Component {
  render() {
    const todoList = ["learn react", "learn redux"];
    const isLogined = true;
    return (
      <div>
        <h1>欢迎语</h1>
        <p>hello,this is welcome component!</p>
        <h1>用map循环</h1>
        <ul>{todoList.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        <h1>选择表达式</h1>
        <p>{isLogined ? "您已登录" : "请登录"}</p>
      </div>
    );
  }
}
export default Welcome;
