import React from 'react';
import styled from 'styled-components';
import Anchor from '@components/Anchor';

const Foot = styled.footer`
  padding: 16px;
  font-size: 12px;
`;

export default function() {
  return (
    <Foot>
      {`© ${new Date().getFullYear()} Built with `}
      <Anchor href="https://www.gatsbyjs.org" newTab>
        Gatsby
      </Anchor>
      {' and '}
      <Anchor href="https://graphql.org/" newTab>
        GraphQL
      </Anchor>
      {'. Made by '}
      <Anchor href="https://github.com/vmarchesin/" newTab>
        vmarchesin
      </Anchor>
    </Foot>
  );
}
