module.exports = [
  {
    id: 'beginner-0',
    codeString: '',
    level: 'beginner',
    subjects: ['conceptual'],
    title: 'Which of the following is false about JavaScript?',
    answers: [
      {
        id: 'beginner-0-a',
        value: 'JavaScript does not support asynchronous code.',
        isCorrect: true,
      },
      {
        id: 'beginner-0-b',
        value: 'JavaScript does not have type definitions.',
        isCorrect: false,
      },
      {
        id: 'beginner-0-c',
        value: 'JavaScript was created in 10 days.',
        isCorrect: false,
      },
      {
        id: 'beginner-0-d',
        value: 'JavaScript can be used as a server language.',
        isCorrect: false,
      },
    ],
    explanation: 'JavaScript supports asynchronous code by default.',
  },
  {
    id: 'beginner-1',
    codeString: '',
    level: 'beginner',
    subjects: ['browser'],
    title: 'Which of the following is not a browser function?',
    answers: [
      { id: 'beginner-1-a', value: 'openTab()', isCorrect: true },
      { id: 'beginner-1-b', value: 'alert()', isCorrect: false },
      { id: 'beginner-1-c', value: 'setTimeout()', isCorrect: false },
      { id: 'beginner-1-d', value: 'setInterval()', isCorrect: false },
    ],
    explanation: `To open a url in a new tab you should use #window.open(url, '_blank');#`,
  },
];
