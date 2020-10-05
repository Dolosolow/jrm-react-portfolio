import React from 'react';
import { StyledCard, StyledButton } from './styles';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Card = ({ background, style: { opacity, y } }) => {
  return (
    <StyledCard $background={background} style={{ opacity, transform: y.interpolate(y => `translate3d(0,${y}px,0)`) }}>
      <div className="card__content">
        <h2 className="card__title"><span>Spotify</span>&nbsp;Mock Web App</h2>
        <p className="card__desc">
        In commodo velit metus duis interdum eu non. Nulla imperdiet pellentesque bibendum amet nulla.
        </p>
        <div className="card__btns">
          <StyledButton $background={background}>Details</StyledButton>
          <StyledButton $background={background} $variant='outline' style={{ paddingRight: '20px'}}>
            <span>See the live</span>
            <ExitToAppIcon fontSize='large' style={{ position: 'absolute', marginLeft: '5px' }} />
          </StyledButton>
        </div>
      </div>
      <div className="card__img">
        <img src="https://images.creativemarket.com/0.1.0/ps/8725987/1820/1214/m1/fpnw/wm0/spotify-.jpg?1594828228&s=1b710ecda88c0e7d0415da75db4d6324" alt={`project`} />
      </div>
    </StyledCard>
  );
}

export default Card;