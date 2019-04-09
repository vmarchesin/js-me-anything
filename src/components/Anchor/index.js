import React from 'react';
import PropTypes from 'prop-types'

import Styled from './style';

const renderAnchor = ({ children, href, ...props }) => (
  <Styled.Anchor
    href={href}
    {...props}
  >
    {children}
  </Styled.Anchor>
);

const renderLink = ({ children, href, ...props }) => (
  <Styled.Link
    to={href}
    {...props}
  >
    {children}
  </Styled.Link>
);

const Button = ({ children, href, link, ...props }) => {
  if (link) {
    return renderLink({ children, href, ...props })
  }

  return renderAnchor({ children, href, ...props });
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  link: PropTypes.bool,
};

Button.defaultProps = {
  href: '',
  link: false,
};

export default Button;
