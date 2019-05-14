import React from 'react';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';

SyntaxHighlighter.registerLanguage('javascript', js);

// TODO: fix react-keys warning
export function parseCode(str) {
  const content = str
    .split(/(#[^#]*#)/)
    .map((s, i) =>
      s.match(/#([^#]*)#/) ? (
        <SyntaxHighlighter
          language="javascript"
          style={{ ...dark, display: 'inline' }}
          key={i}
        >
          {s.match(/#([^#]*)#/)[1]}
        </SyntaxHighlighter>
      ) : (
        <span key={i}>
          {s.includes('\n') ? (
            <React.Fragment key={`fragment-${i}`}>
              {s.split('\n').reduce((prev, curr, i) => [prev, <br key={i}/>, curr])}
            </React.Fragment>
          ) : (
            s
          )}
        </span>
      )
    )
    .reduce((prev, curr) => [prev, '', curr]);

  return <div>{content}</div>;
}
