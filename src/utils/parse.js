import React from 'react';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';

SyntaxHighlighter.registerLanguage('javascript', js);

export function parseCode(str) {
  const content = str
                .split(/(%{.*})/)
                .map((s, i) =>
                  s.match(/(%{.*})/)
                    ? (
                      <SyntaxHighlighter
                        language='javascript'
                        style={dark}
                        key={i}
                      >
                        {s.match(/%{(.*)}/)[1]}
                      </SyntaxHighlighter>
                    ) : <div key={i}>{s}</div>)
                .reduce((prev, curr) => [prev, '', curr]);

  return <div>{content}</div>;
};