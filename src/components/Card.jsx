import React from 'react';

const Card = ({ coach }) => {
  return (
    <div className="card">
      <img src={coach.image} alt={`${coach.fullname}'s profile`} />
      <h2>{coach.fullname}</h2>
      <p>{coach.bio}</p>
      <p>City: {coach.city}</p>
      <p>Price: ${coach.price}</p>
      <p>Availability: {coach.availability}</p>
    </div>
  );
};

export default Card;
