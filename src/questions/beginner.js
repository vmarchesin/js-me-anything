export default [
  {
    codeString: `(function() { let i = 0; })();\nconsole.log(i);`,
    hasCode: true,
    level: 'beginner',
    subjects: ['closure'],
    title: 'What does the following code output?',
    answers: [
      { id: 'a', value: 'undefined', isCorrect: true },
      { id: 'b', value: "'1'", isCorrect: false },
      { id: 'c', value: "'number'", isCorrect: false },
      { id: 'd', value: '1', isCorrect: false },
    ],
    explanation: 'The let keyword is block scoped. In this case i only exists inside the function scope.'
  },
];