import React from "react";
class CommentList extends React.Component {
  render() {
    let comments = this.props.comments;
    // let comments = ["大家好", "woshi"];
    return (
      <div className="comment-list-component">
        <label>评论列表</label>
        <ul className="list-group mb-3">
          {comments.map((comment, idx) => (
            <li key={idx} className="list-group-item">
              {comment}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default CommentList;
