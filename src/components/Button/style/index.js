import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools'
import { Link } from 'gatsby';

const StyledButton = styled.button`
  padding: 8px;
  border: none;

  outline: none;
  cursor: pointer;
  border-radius: 8px;

  ${switchProp('variant', {
    primary: css`
      background-color: #F18805;
    `,
  }, css`
    background-color: #F18805;
  `)}
`;

export default StyledButton;