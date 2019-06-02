import styled from 'styled-components';
import { colors } from '@layouts/theme';

export default styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  div {
    position: absolute;
    border: 4px solid ${colors.primary};
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.75, 0.55, 1) infinite;
  }

  div:nth-child(1) {
    animation-delay: 0s;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`;
