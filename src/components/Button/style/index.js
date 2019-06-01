import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

import { colors } from '@layouts/theme';

const primaryVariant = css`
  color: ${colors.white};
  background-color: ${colors.primary};
  &:hover {
    background-color: ${colors.primaryHover};
  }
`;

const StyledButton = styled.button`
  padding: 0 24px;
  line-height: 48px;
  border: none;
  font-weight: 600;

  outline: none;
  cursor: pointer;
  border-radius: 40px;

  margin: 0;

  ${switchProp(
    'variant',
    {
      primary: primaryVariant,
    },
    primaryVariant
  )}
`;

export default StyledButton;
