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
    // 注意：可以通过这种方式将“子组件”的数据传递至“父组件”
    this.props.onAddComment(this.state.value);
  }
  render() {
    return (
      <div className="form-group">
        <p>CommentBox留言内容：</p>
        <div>
          <input
            className="form-control"
            type="text"
            value={this.state.value}
            onChange={e=>this.handleChange(e)}
          />
        </div>
        <p>已有{this.props.commentsLength}条评论</p>
        <div>
          <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>提交</button>
        </div>
      </div>
    );
  }
}
export default CommentBox;
