import React from "react";
class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("提交的内容是：", this.state.value);
  }
  render() {
    return (
      <div className="form-group">
        <p>留言内容：</p>
        <div>
          <input
            className="form-control"
            type="text"
            value={this.state.value}
            onChange={e=>this.handleChange(e)}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>提交</button>
        </div>
      </div>
    );
  }
}
export default CommentBox;
