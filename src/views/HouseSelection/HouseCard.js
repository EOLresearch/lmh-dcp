import React from 'react';

const HouseCard = ({ house, onHouseClick }) => {
  return (
    <div className="house-card" onClick={() => onHouseClick(house.name)}>
      <img className="house-card-image" src={house.images.ext} alt={house.name} />
      <h2 className="house-card-title">{house.name}</h2>
    </div>
  );
};

export default HouseCard;