import React from 'react';
import Anchor from '@components/Anchor';

export default function() {
  return (
    <React.Fragment>
      <p>It looks like something went wrong.</p>
      <p>
        Send me a tweet at{' '}
        <Anchor anchor href="https://twitter.com/devmarchesin" newTab>
          @devmarchesin
        </Anchor>{' '}
        so we can figure out what happened.
      </p>
    </React.Fragment>
  );
}
