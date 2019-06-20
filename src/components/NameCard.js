import React from "react";
class NameCard extends React.Component {
  render() {
    const { name, tel, isHuman, tags } = this.props;
    return (
      <div className="alert alert-success">
        <h4 className="alert-=heading">{name}</h4>
        <ul>
          <li>{tel}</li>
          <li>{isHuman ? "人类" : "外星人"}</li>
          <li>{tags.map((item, idx) => <span className="badge badge-pill badge-primary" key={idx}>{item}</span>)}</li>
        </ul>
      </div>
    );
  }
}
export default NameCard;
