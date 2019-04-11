import React from 'react';
import styled from 'styled-components';
import Anchor from '@components/Anchor';

const Foot = styled.footer`
  padding: 16px;
`;

const Footer = () => (
  <Foot>
    © {new Date().getFullYear()}, Built with{' '}
    <Anchor anchor href="https://www.gatsbyjs.org" newTab>
      Gatsby
    </Anchor>
    . Made by{' '}
    <Anchor anchor href="https://github.com/vmarchesin/" newTab>
      vmarchesin
    </Anchor>
  </Foot>
);

export default Footer;
