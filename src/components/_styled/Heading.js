import styled, { css } from 'styled-components';

const commonCSS = css`
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: -apple-system, 'Roboto', BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  line-height: 1.1;
`;

export const Hero = styled.h1`
  margin-bottom: 32px;
  font-weight: 600;

  font-size: 2.25rem;
  ${commonCSS}
`;

export const Title = styled.h2`
  margin-bottom: 16px;

  font-size: 1.62671rem;
  ${commonCSS}
`;

export const Subtitle = styled.h3`
  font-size: 1.38316rem;
  ${commonCSS}
`;

export const H4 = styled.h4`
  font-size: 1rem;
  ${commonCSS}
`;


export const H5 = styled.h5`
  font-size: 0.85028rem;
  ${commonCSS}
`;


export const H6 = styled.h6`
  font-size: 0.78405rem;
  ${commonCSS}
`;