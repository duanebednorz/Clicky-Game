import React from 'react';

function Card(props) {
  return (
    <div className="card-holder">
      <img src={props.image} alt={props.name} className="card-select grow img-thumbnail m-2 pointer" onClick={() => props.clickHandler(props.id)} />
    </div>
  );
};

export default Card;