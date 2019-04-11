import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

import { colors } from '@layouts/theme';

const StyledButton = styled.button`
  padding: 8px;
  border: none;

  outline: none;
  cursor: pointer;
  border-radius: 8px;

  ${switchProp(
    'variant',
    {
      primary: css`
        background-color: ${colors.primary};
      `,
    },
    css`
      background-color: ${colors.primary};
    `
  )}
`;

export default StyledButton;
