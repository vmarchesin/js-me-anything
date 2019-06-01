import React from 'react';
import styled from 'styled-components';
import { colors } from '@layouts/theme';

const Badge = styled.span`
  background-color: ${colors.background};
  border-radius: 4px;

  font-size: 14px;
  font-weight: 600;

  padding: 4px 8px;
  margin: 4px;
`;

export default function({ children }) {
  return <Badge>{children}</Badge>;
}
