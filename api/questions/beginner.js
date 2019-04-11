module.exports = [
  {
    id: 'beginner-0',
    codeString: `(function() { let i = 0; })();\nconsole.log(i);`,
    level: 'beginner',
    subjects: ['scope', 'es6'],
    title: 'What does the following code output?',
    answers: [
      { id: 'beginner-0-a', value: 'undefined', isCorrect: true },
      { id: 'beginner-0-b', value: "'1'", isCorrect: false },
      { id: 'beginner-0-c', value: "'number'", isCorrect: false },
      { id: 'beginner-0-d', value: '1', isCorrect: false },
    ],
    explanation:
      'The let keyword is block scoped. In this case the variable only exists inside the function scope.',
  },
  {
    id: 'beginner-1',
    codeString: '',
    level: 'beginner',
    subjects: ['conceptual'],
    title: 'Which of the following is false about JavaScript?',
    answers: [
      {
        id: 'beginner-1-a',
        value: 'JavaScript does not support asynchronous code.',
        isCorrect: true,
      },
      {
        id: 'beginner-1-b',
        value: 'JavaScript does not have type definitions.',
        isCorrect: false,
      },
      {
        id: 'beginner-1-c',
        value: 'JavaScript was created in 10 days.',
        isCorrect: false,
      },
      {
        id: 'beginner-1-d',
        value: 'JavaScript can be used as a server language.',
        isCorrect: false,
      },
    ],
    explanation: 'JavaScript supports asynchronous code by default.',
  },
  {
    id: 'beginner-2',
    codeString: '',
    level: 'beginner',
    subjects: ['browser'],
    title: 'Which of the following is not a browser function?',
    answers: [
      { id: 'beginner-2-a', value: 'openTab()', isCorrect: true },
      { id: 'beginner-2-b', value: 'alert()', isCorrect: false },
      { id: 'beginner-2-c', value: 'setTimeout()', isCorrect: false },
      { id: 'beginner-2-d', value: 'setInterval()', isCorrect: false },
    ],
    explanation:
      "To open a url in a new tab you should use:\n%{window.open(url, '_blank');}",
  },
];
