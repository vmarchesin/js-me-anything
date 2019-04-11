export default [
  {
    codeString: `(function() { let i = 0; })();\nconsole.log(i);`,
    level: 'beginner',
    subjects: ['scope', 'es6'],
    title: 'What does the following code output?',
    answers: [
      { id: 'a', value: 'undefined', isCorrect: true },
      { id: 'b', value: "'1'", isCorrect: false },
      { id: 'c', value: "'number'", isCorrect: false },
      { id: 'd', value: '1', isCorrect: false },
    ],
    explanation:
      'The let keyword is block scoped. In this case the variable only exists inside the function scope.',
  },
  {
    codeString: '',
    level: 'beginner',
    subjects: ['conceptual'],
    title: 'Which of the following is false about JavaScript?',
    answers: [
      {
        id: 'a',
        value: 'JavaScript does not support asynchronous code.',
        isCorrect: true,
      },
      {
        id: 'b',
        value: 'JavaScript does not have type definitions.',
        isCorrect: false,
      },
      {
        id: 'c',
        value: 'JavaScript was created in 10 days.',
        isCorrect: false,
      },
      {
        id: 'd',
        value: 'JavaScript can be used as a server language.',
        isCorrect: false,
      },
    ],
    explanation: 'JavaScript supports asynchronous code by default.',
  },
  {
    codeString: '',
    level: 'beginner',
    subjects: ['browser'],
    title: 'Which of the following is not a browser function?',
    answers: [
      { id: 'a', value: 'openTab()', isCorrect: true },
      { id: 'b', value: 'alert()', isCorrect: false },
      { id: 'c', value: 'setTimeout()', isCorrect: false },
      { id: 'd', value: 'setInterval()', isCorrect: false },
    ],
    explanation:
      "To open a url in a new tab you should use:\n%{window.open(url, '_blank');}",
  },
];
