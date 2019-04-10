import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './style';

const Button = ({ children, onClick, ...props }) => (
  <StyledButton onClick={onClick} {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
