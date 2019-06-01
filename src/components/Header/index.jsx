import { Link } from 'gatsby';
import React from 'react';

import { Hero } from '@components/_styled/Heading';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#f9ce00`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '100%',
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Hero style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Hero>
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
