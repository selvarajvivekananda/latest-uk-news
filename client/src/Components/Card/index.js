import "./index.css";
import React from "react";
const Card = (props) => {
  const handleClick = (e, url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="card" onClick={(e) => handleClick(e, props.link)}>
      <img src={props.img} alt="" />
      <div className="card-body">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
export default Card;