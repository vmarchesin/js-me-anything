import React from 'react';
import PropTypes from 'prop-types';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';

SyntaxHighlighter.registerLanguage('javascript', js);



const Question = ({ hasCode, codeString, title }) => (
  <div>
    <p>{title}</p>
    {hasCode ? <SyntaxHighlighter language='javascript' style={dark}>{codeString}</SyntaxHighlighter> : null}
  </div>
);

Question.propTypes = {
  codeString: PropTypes.string,
  hasCode: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
}

export default Question;
