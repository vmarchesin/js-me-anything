/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';

SyntaxHighlighter.registerLanguage('javascript', js);

export function parseAnswer(str, applySyntaxHighlight) {
  if (applySyntaxHighlight) {
    return (
      <SyntaxHighlighter
        language="javascript"
        style={{ ...dark, display: 'inline' }}
      >
        {str}
      </SyntaxHighlighter>
    );
  }

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
              {s
                .split('\n')
                .reduce((prev, curr, j) => [prev, <br key={j} />, curr])}
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
              {s
                .split('\n')
                .reduce((prev, curr, j) => [prev, <br key={j} />, curr])}
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

export function parseQuestion(str) {
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
        <span key={i}>{s}</span>
      )
    )
    .reduce((prev, curr) => [prev, '', curr]);

  return <div>{content}</div>;
}
