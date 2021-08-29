import React, { useState } from 'react';

function Card(props) {
  const [clickedOnce, setClickedOnce] = useState(false);

  function cardClicked() {
    setClickedOnce(true);
  }

  return (
    <div className="card" onClick={() => props.checkClicks(props.info.id)}>
      <img src={props.info.src} alt="" />
      <footer>JOTARO JOSUKE{props.info.id}</footer>
    </div>
  );
}

export default Card;
