import React from "react";
class LikesButton extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 0
    };
  }
  handleClick() {
    this.setState(prevState => ({
      data: prevState.data + 1
    }));
  }
  render() {
    return (
      <div className="likes-button-component">
        当前点赞数为：{this.state.data}
        {/* <button onClick={this.handleClick.bind(this)} className="btn btn-outline-primary btn-lg">点赞数+1</button> */}
        <button onClick={()=>this.handleClick()} className="btn btn-outline-primary btn-lg">点赞数+1</button>
      </div>
    );
  }
}
export default LikesButton;
