/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
import React from 'react';

import Styled from './style';

const renderAnchor = ({ children, href, ...props }) => {
  if (props.newTab) {
    props.rel = 'noopener noreferrer';
    props.target = '_blank';
  }

  return (
    <Styled.Anchor href={href} {...props}>
      {children}
    </Styled.Anchor>
  );
};

const renderLink = ({ children, href, ...props }) => (
  <Styled.Link to={href} {...props}>
    {children}
  </Styled.Link>
);

const Anchor = ({ children, href, link, ...props }) => {
  if (link) {
    return renderLink({ children, href, ...props });
  }

  return renderAnchor({ children, href, ...props });
};

Anchor.defaultProps = {
  href: '',
  link: false,
};

export default Anchor;
