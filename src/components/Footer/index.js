import React from 'react';
import styled from 'styled-components';
import Anchor from '@components/Anchor';

const Foot = styled.footer`
  padding: 16px;
`

const Footer = () => (
  <Foot style={{ position: 'fixed', bottom: 0 }}>
    © {new Date().getFullYear()}, Built with
    {' '}
    <Anchor
      anchor
      href="https://www.gatsbyjs.org"
      rel="noopener noreferrer"
      target="_blank"
    >
    Gatsby
    </Anchor>. Made by
    {' '}
    <Anchor
      anchor
      href="https://github.com/vmarchesin/"
      rel="noopener noreferrer"
      target="_blank"
    >
      vmarchesin
    </Anchor>
  </Foot>
);

export default Footer;
