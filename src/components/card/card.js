import React from 'react';
import './card.scss';

const Card = props => {
  return (
    <div className="card">
      <div className="card__content">
        <h2 className="project_name"></h2>
        <p className="shortDescription"></p>
      </div>
      <div className="card__img">
        <img src="https://images.creativemarket.com/0.1.0/ps/8725987/1820/1214/m1/fpnw/wm0/spotify-.jpg?1594828228&s=1b710ecda88c0e7d0415da75db4d6324" alt=""/>
      </div>
    </div>
  )
}

export default Card;