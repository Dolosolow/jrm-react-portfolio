import React from 'react';
import Card from '../card';
import './cardList.scss';

const CardList = props => {
  return (
    <div className="cardlist">
      <Card />
      <Card />
      <Card />
    </div>
  )
};

export default CardList;