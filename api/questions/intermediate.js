module.exports = [
  {
    id: 'intermediate-0',
    codeString: `
      function mul(x) {
        return function(y) {
          return function(z) {
            return function(w) {
              return function(p) {
                return x * y * z * w * p;
              };
            };
          };
        };
      }
      console.log(mul(2)(3)(4)(5)(6));
    `,
    level: 'intermediate',
    subjects: ['currying'],
    title: 'What would be the output of following code?',
    answers: [
      { id: 'intermediate-0-a', value: '720', isCorrect: true },
      { id: 'intermediate-0-b', value: 'undefined', isCorrect: false },
      { id: 'intermediate-0-c', value: 'Reference Error', isCorrect: false },
      { id: 'intermediate-0-d', value: 'Type Error', isCorrect: false },
    ],
    explanation: '',
  },
  {
    id: 'intermediate-1',
    codeString: `(function() { let i = 0; })();\nconsole.log(i);`,
    level: 'intermediate',
    subjects: ['scope', 'ES6'],
    title: 'What does the following code output?',
    answers: [
      { id: 'intermediate-1-a', value: 'undefined', isCorrect: true },
      { id: 'intermediate-1-b', value: "'0'", isCorrect: false },
      { id: 'intermediate-1-c', value: "'number'", isCorrect: false },
      { id: 'intermediate-1-d', value: '0', isCorrect: false },
    ],
    explanation:
      "The #let# keyword is block scoped. In this case the variable only exists inside the function scope.",
  },
];

