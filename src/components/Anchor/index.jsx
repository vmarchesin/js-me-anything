/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
import React from 'react';

import Styled from './style';

const Anchor = ({ children, href = '', ...props }) => {
  if (props.newTab) {
    props.rel = 'noopener noreferrer';
    props.target = '_blank';
    delete props.newTab;
  }

  return (
    <Styled.Anchor href={href} {...props}>
      {children}
    </Styled.Anchor>
  );
};

export default Anchor;
