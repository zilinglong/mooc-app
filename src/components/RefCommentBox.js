import React from "react";
class RefCommentBox extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log("提交的内容是：", this.textInput.value);
  }
  render() {
    return (
      <div className="form-group">
        <p>留言内容：</p>
        <div>
          <input
            className="form-control"
            type="text"
            ref={textInput => {
              this.textInput = textInput;
            }}
          />
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={this.handleSubmit.bind(this)}
          >
            提交
          </button>
        </div>
      </div>
    );
  }
}
export default RefCommentBox;
