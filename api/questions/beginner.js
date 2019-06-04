module.exports = [
  {
    id: 'beginner-0',
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
    explanation:
      "This simply creates a new array with 5 empty items. The string representation of this is #',,,,,'#.",
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
    explanation:
      'Booleans can be operands to the #+# operator in JavaScript. JS evaluates this by casting the booleans to integers and then adding them. #true# converts to 1 and #false# converts to 0. The lefthand side of the inequality is equivalent to #1 + 0 = 1# and the right hand side is #1 + 1 - 2#. The whole becomes #1 > 2# which is false.',
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
    explanation:
      'This is true because we are casting a string to a number, and then taking away that exact number from it.',
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
    explanation:
      "Two arrays added together equal the empty string. This is because arrays are objects, not primitive data types. During evaluation JavaScript first tries to convert the array into a primitive, but this just results in the array, so it is converted to a string. Since the arrays are empty they both convert to the empty string #''#, which when added to #'f,o,o'# doesn't change anything.",
  },
  {
    id: 'beginner-6',
    codeString: `var arr = ['foo', 'bar', 'baz'];\narr.length = 0;\narr.push('bin');\nconsole.log(arr);`,
    level: 'beginner',
    subjects: ['arrays'],
    title: 'What does the following code output?',
    answers: [
      { id: 'beginner-6-a', value: "['bin']", isCorrect: true },
      { id: 'beginner-6-b', value: "['foo', 'bar', 'baz']", isCorrect: false },
      { id: 'beginner-6-c', value: "['bin', 'bar', 'baz']", isCorrect: false },
      {
        id: 'beginner-6-d',
        value: "['foo', 'bar', 'baz', 'bin']",
        isCorrect: false,
      },
    ],
    explanation:
      "Setting the length to an array to anything lower than its current length truncates it. When we set the length to 0 this effectively erases all its content. Therefore, when we push #'bin'# into the array it will be the sole element in it, resulting in #['bin']#.",
  },
  {
    id: 'beginner-7',
    codeString: 'console.log(this);',
    level: 'beginner',
    subjects: ['browser'],
    title: 'What does the following code output on the browser?',
    answers: [
      { id: 'beginner-7-a', value: 'window', isCorrect: true },
      { id: 'beginner-7-b', value: 'console', isCorrect: false },
      { id: 'beginner-7-c', value: 'undefined', isCorrect: false },
      { id: 'beginner-7-d', value: "'object'", isCorrect: false },
    ],
    explanation:
      'In the global execution context (outside any function), #this# refers to the global object. In web browsers the window object is also the global object.',
  },
  {
    id: 'beginner-7',
    codeString: 'console.log(typeof typeof 1);',
    level: 'beginner',
    subjects: ['types'],
    title: 'What does the following code output?',
    answers: [
      { id: 'beginner-7-a', value: "'string'", isCorrect: true },
      { id: 'beginner-7-b', value: "'number'", isCorrect: false },
      { id: 'beginner-7-c', value: "'undefined'", isCorrect: false },
      { id: 'beginner-7-d', value: "'null'", isCorrect: false },
    ],
    explanation:
      "#typeof 1# will return #'number'# and #typeof 'number'# will return #'string'#.",
  },
  {
    id: 'beginner-7',
    codeString: 'typeof undefined == typeof NULL',
    level: 'beginner',
    subjects: ['types'],
    title: 'What does the following code output?',
    answers: [
      { id: 'beginner-7-a', value: 'true', isCorrect: true },
      { id: 'beginner-7-b', value: 'false', isCorrect: false },
      { id: 'beginner-7-c', value: 'undefined', isCorrect: false },
      { id: 'beginner-7-d', value: 'Error', isCorrect: false },
    ],
    explanation:
      'The expression will be evaluated to #true#, since #NULL# will be treated as any other undefined variable. JavaScript is case-sensitive and here we are using #NULL# instead of #null#.',
  },
  {
    id: 'beginner-8',
    codeString: 'console.log(1 < 2 < 3);\nconsole.log(3 > 2 > 1);',
    level: 'beginner',
    subjects: ['operators'],
    title: 'What does the following code output?',
    answers: [
      { id: 'beginner-8-a', value: 'true\nfalse', isCorrect: true },
      { id: 'beginner-8-b', value: 'true\ntrue', isCorrect: false },
      { id: 'beginner-8-c', value: 'false\nfalse', isCorrect: false },
      { id: 'beginner-8-d', value: 'false\ntrue', isCorrect: false },
    ],
    explanation: `The first statement returns #true# which is as expected.

    The second returns #false# because of how the engine works regarding operator associativity for < and >. It compares left to right, so for #3 > 2 > 1# JavaScript translates to #true > 1#. #true# has value #1# when cast as a number, so it then compares #1 > 1#, which is #false#.

    Comparatively, the first statement evaluates to #true < 3#, then #1 < 3#, which is #true#.`,
  },
  {
    id: 'beginner-9',
    codeString: "console.log(false == '0');\nconsole.log(false === '0');",
    level: 'beginner',
    subjects: ['operators', 'types'],
    title: 'What does the following code output?',
    answers: [
      { id: 'beginner-9-a', value: 'true\nfalse', isCorrect: true },
      { id: 'beginner-9-b', value: 'true\ntrue', isCorrect: false },
      { id: 'beginner-9-c', value: 'false\nfalse', isCorrect: false },
      { id: 'beginner-9-d', value: 'false\ntrue', isCorrect: false },
    ],
    explanation: `
    In JavaScript, there are two sets of equality operators. The triple-equal operator #===# behaves like any traditional equality operator would: evaluates to true if the two expressions on either of its sides have the same type and the same value.

    The double-equal operator, however, tries to coerce the values before comparing them. It is therefore generally good practice to use the #===# rather than #==#. The same holds true for #!==# vs #!=#.
    `,
  },
  {
    id: 'beginner-10',
    codeString: 'const foo = 0;\nconsole.log(foo++);',
    level: 'beginner',
    subjects: ['ES6'],
    title: 'What does the following code output?',
    answers: [
      { id: 'beginner-10-a', value: 'TypeError', isCorrect: true },
      { id: 'beginner-10-b', value: '1', isCorrect: false },
      { id: 'beginner-10-c', value: '0', isCorrect: false },
      { id: 'beginner-10-d', value: 'undefined', isCorrect: false },
    ],
    explanation: `
    The #const# declaration creates a constant whose scope can be either global or local to the block in which it is declared. Global constants do not become properties of the window object (in browsers), unlike var variables. An initializer for a constant is required; that is, you must specify its value in the same statement in which it's declared (which makes sense, given that it can't be changed later).

    The #const# declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered. For example, the code below is perfectly valid:
    `,
    explanationCodeString:
      'const foo = { x: 1 };\nfoo.x = 2;\nconsole.log(foo.x); // 2',
  },
  {
    id: 'beginner-11',
    codeString: "console.log(10 + 20 + '30')",
    level: 'beginner',
    subjects: ['types', 'operators'],
    title: 'What does the following code output?',
    answers: [
      { id: 'beginner-11-a', value: "'3030'", isCorrect: true },
      { id: 'beginner-11-b', value: "'102030'", isCorrect: false },
      { id: 'beginner-11-c', value: '60', isCorrect: false },
      { id: 'beginner-11-d', value: "'1050'", isCorrect: false },
    ],
    explanation:
      "The first operation #10 + 20# is executed normally, resulting in #30#. However, when adding #30 + '30'# the number is coerced into a string, resulting in #'3030'#.",
  },
  {
    id: 'beginner-12',
    level: 'beginner',
    subjects: ['conceptual', 'arrays'],
    title: 'How do you check if the variable #foo# is an array?',
    answers: [
      { id: 'beginner-12-a', value: 'Array.isArray(foo)', isCorrect: true },
      { id: 'beginner-12-b', value: 'foo.length > 0', isCorrect: false },
      {
        id: 'beginner-12-c',
        value: "typeof foo === 'array'",
        isCorrect: false,
      },
      { id: 'beginner-12-d', value: "foo.type === 'array'", isCorrect: false },
    ],
    explanation:
      "An array is an object, so the value of #typeof []# is equal to #'object'#. The easiest way to check if a variable is an array is by using the helper method #Array.isArray()#.",
  },
  {
    id: 'beginner-13',
    codeString: `function composeName({ firstName = 'John', lastName = 'Doe' }) {
  return firstName + ' ' + lastName;
}

const user = { firstName: 'Bruce' };
console.log(composeName(user));`,
    level: 'beginner',
    subjects: ['operators', 'ES6', 'objects'],
    title: 'What will be the output of the following code?',
    answers: [
      { id: 'beginner-13-a', value: "'Bruce Doe'", isCorrect: true },
      { id: 'beginner-13-b', value: "'John Doe'", isCorrect: false },
      { id: 'beginner-13-c', value: "'Bruce'", isCorrect: false },
      { id: 'beginner-13-d', value: "'Bruce undefined'", isCorrect: false },
    ],
    explanation: `The #composeName# function takes an object with first and last name properties as the argument, and returns a string combining both. The function uses the destructuring assignment to unpack the #firstName# and #lastName# from the receiving argument.

    Both #firstName# and #lastName# have default values assigned to them, #'John'# and #'Doe'# respectively (using the #=# operator when defining the function arguments). However, only #firstName# is passed when calling the function on line 6. The default value is still used for #lastName# since it was not defined when calling the function.

    This results in #'Bruce Doe'#.`,
  },
];
