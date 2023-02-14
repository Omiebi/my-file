import React from "react";

import "./Card.css";

const Card = ({ title, info, buttonText, top, bottom }) => {
  let ectraClass;
  if (top) {
    ectraClass = "card-bg1";
  } else if (bottom) {
    ectraClass = "card-bg2";
  }
  return (
    <div className={`card ${ectraClass}`}>
      <h2>{title}</h2>
      <h3>{info}</h3>
      <button className="learn-more-button">{buttonText}</button>
    </div>
  );
};

export default Card;
