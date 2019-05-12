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
  {
    id: 'beginner-2',
    codeString: 'new Array(5).toString();',
    level: 'beginner',
    subjects: ['arrays'],
    title: 'What does the following code output?',
    answers: [
      { id: 'beginner-2-a', value: "',,,,,'", isCorrect: true },
      { id: 'beginner-2-b', value: "'[ ]'", isCorrect: false },
      { id: 'beginner-2-c', value: 'Array', isCorrect: false },
      { id: 'beginner-2-d', value: '[ ]', isCorrect: false },
    ],
    explanation: "This simply creates a new array with 5 empty items. The string representation of this is #',,,,,'#.",
  },
  {
    id: 'beginner-3',
    codeString: '(true + false) > 1 + true',
    level: 'beginner',
    subjects: ['operators'],
    title: 'What does the following code output?',
    answers: [
      { id: 'beginner-3-a', value: 'false', isCorrect: true },
      { id: 'beginner-3-b', value: 'true', isCorrect: false },
      { id: 'beginner-3-c', value: 'NaN', isCorrect: false },
      { id: 'beginner-3-d', value: 'Boolean', isCorrect: false },
    ],
    explanation: "Booleans can be operands to the #+# operator in JavaScript. JS evaluates this by casting the booleans to integers and then adding them. #true# converts to 1 and #false# converts to 0. The lefthand side of the inequality is equivalent to #1 + 0 = 1# and the right hand side is #1 + 1 - 2#. The whole becomes #1 > 2# which is false.",
  },
  {
    id: 'beginner-4',
    codeString: "Number('1') - 1 == 0",
    level: 'beginner',
    subjects: ['operators'],
    title: 'What does the following code output?',
    answers: [
      { id: 'beginner-4-a', value: 'true', isCorrect: true },
      { id: 'beginner-4-b', value: 'false', isCorrect: false },
      { id: 'beginner-4-c', value: 'NaN', isCorrect: false },
      { id: 'beginner-4-d', value: 'TypeError', isCorrect: false },
    ],
    explanation: "This is true because we are casting a string to a number, and then taking away that exact number from it.",
  },
  {
    id: 'beginner-5',
    codeString: "[] + [] + 'foo'.split('');",
    level: 'beginner',
    subjects: ['operators', 'arrays'],
    title: 'What does the following code output?',
    answers: [
      { id: 'beginner-5-a', value: "'f,o,o'", isCorrect: true },
      { id: 'beginner-5-b', value: "['f', 'o', 'o']", isCorrect: false },
      { id: 'beginner-5-c', value: "[ ]'f,o,o'", isCorrect: false },
      { id: 'beginner-5-d', value: "['f']['o']['o']", isCorrect: false },
    ],
    explanation: "Two arrays added together equal the empty string. This is because arrays are objects, not primitive data types. During evaluation JavaScript first tries to conver the array into a primitive, but this just results in the array, so it is converted to a string. Since the arrays are empty they both convert to the empty string #''#, which when added to #'f,o,o'# doesn't change anything.",
  },
  {
    id: 'beginner-6',
    codeString: `
    var arr = ['foo', 'bar', 'baz'];
    arr.length - 0;
    arr.push('bin');
    console.log(arr);
    `,
    level: 'beginner',
    subjects: ['arrays'],
    title: 'What does the following code output?',
    answers: [
      { id: 'beginner-6-a', value: "['bin']", isCorrect: true },
      { id: 'beginner-6-b', value: "['foo', 'bar', 'baz']", isCorrect: false },
      { id: 'beginner-6-c', value: "['bin', 'bar', 'baz']", isCorrect: false },
      { id: 'beginner-6-d', value: "['foo', 'bar', 'baz', 'bin']", isCorrect: false },
    ],
    explanation: "Setting the length to an array to anything lower than its current length truncates it. When we set the length to 0 this effectively erases all its content. Therefore, when we push #'bin'# into the array it will be the sole element in it, resulting in #['bin']#.",
  },
  {
    id: 'beginner-7',
    codeString: `console.log(this);`,
    level: 'beginner',
    subjects: ['browser'],
    title: 'What does the following code output on the browser?',
    answers: [
      { id: 'beginner-7-a', value: 'window', isCorrect: true },
      { id: 'beginner-7-b', value: 'console', isCorrect: false },
      { id: 'beginner-7-c', value: 'undefined', isCorrect: false },
      { id: 'beginner-7-d', value: "'object'", isCorrect: false },
    ],
    explanation: "In the global execution context (outside any function), #this# refers to the global object. In web browsers the window object is also the global object.",
  },
];
