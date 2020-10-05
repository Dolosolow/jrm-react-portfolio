import React from 'react';
import { useTrail } from 'react-spring';
import { StyledHeaderContent } from './styles';

const HeaderContent = props => {
  const { children } = props;
  const animatedTrails = useTrail(React.Children.count(children), {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 2300
  });
  const animatedText = animatedTrails.map((props, idx) => (
    React.cloneElement(children[idx], 
      { key: idx, style: { opacity: props.opacity, transform: props.y.interpolate(y => `translate3d(0,${y}px,0)`) } 
    })
  ));

  return (
    <StyledHeaderContent>
      {animatedText}
    </StyledHeaderContent>
  )
}

export default HeaderContent;