import React from "react";
import "tachyons";

const card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2 tc">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="roboImg" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default card;
