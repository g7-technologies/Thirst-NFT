import React from 'react';
import Wrapper from './Button.styled';

function Button({ text, background, color, onClick }) {
  return <Wrapper background={background} color={color} onClick={onClick}>
    {text}
    </Wrapper>;
}

export default Button;
