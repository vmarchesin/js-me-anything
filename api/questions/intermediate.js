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
    title: 'What does the following code output?',
    answers: [
      { id: 'intermediate-0-a', value: '720', isCorrect: true },
      { id: 'intermediate-0-b', value: 'undefined', isCorrect: false },
      { id: 'intermediate-0-c', value: 'ReferenceError', isCorrect: false },
      { id: 'intermediate-0-d', value: 'TypeError', isCorrect: false },
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
      { id: 'intermediate-1-a', value: 'ReferenceError', isCorrect: true },
      { id: 'intermediate-1-b', value: "'0'", isCorrect: false },
      { id: 'intermediate-1-c', value: 'undefined', isCorrect: false },
      { id: 'intermediate-1-d', value: '0', isCorrect: false },
    ],
    explanation:
      "The #let# keyword is block scoped. In this case the variable only exists inside the function scope. Trying to access an undeclared variable will result in a #ReferenceError#",
  },
  {
    id: 'intermediate-2',
    codeString: `[...[...'...']].length`,
    level: 'intermediate',
    subjects: ['ES6'],
    title: 'What does the following code output?',
    answers: [
      { id: 'intermediate-2-a', value: '3', isCorrect: true },
      { id: 'intermediate-2-b', value: '1', isCorrect: false },
      { id: 'intermediate-2-c', value: 'Error', isCorrect: false },
      { id: 'intermediate-2-d', value: 'undefined', isCorrect: false },
    ],
    explanation: "The spread operator enables us to iterate over any iterable object and spread its elements into an array. So here #'...'# represents a String (which is iterable in JavaScript). This means it results in an array like this #['.','.','.']#. The second spread operator does the exact same thing so the length will be #3#.",
  },
  {
    id: 'intermediate-3',
    codeString: `let x = 2, { x: y = 1 } = { x }; y;`,
    level: 'intermediate',
    subjects: ['ES6'],
    title: 'What does the following code output?',
    answers: [
      { id: 'intermediate-3-a', value: '2', isCorrect: true },
      { id: 'intermediate-3-b', value: '1', isCorrect: false },
      { id: 'intermediate-3-c', value: 'Error', isCorrect: false },
      { id: 'intermediate-3-d', value: '{ x: 1 }', isCorrect: false },
    ],
    explanation: "The first #let x# defines #x# with the value #2#. #{x: y = 1} = {x}# is a destructuring assignment, it takes the variable #y# from the property #x#. In the end, because #x# is #2#, the default value #1# is ignored and #y# takes the value #2# from #x#.",
  },
  {
    id: 'intermediate-4',
    codeString: `
    var x = 3.5;
    console.log(~~x);
    `,
    level: 'intermediate',
    subjects: ['operators'],
    title: 'What does the following code output?',
    answers: [
      { id: 'intermediate-4-a', value: '3', isCorrect: true },
      { id: 'intermediate-4-b', value: '3.5', isCorrect: false },
      { id: 'intermediate-4-c', value: "'3'", isCorrect: false },
      { id: 'intermediate-4-d', value: '-3', isCorrect: false },
    ],
    explanation: "The tilde #~# is a NOT bitwise operator. The double tilde is just shorthand for truncating numbers to integers. It is used as a shorthand to #Math.floor()#, although it has a key difference in that it just removes any numbers after the decimal place. Therefore 3.5 becomes 3.",
  },
  {
    id: 'intermediate-5',
    codeString: `
    function bar() {
      return foo;
      foo = 10;
      function foo() {
        var foo = '11';
      }
    }
    console.log(typeof bar());
    `,
    level: 'intermediate',
    subjects: ['scope'],
    title: 'What does the following code output?',
    answers: [
      { id: 'intermediate-5-a', value: 'function', isCorrect: true },
      { id: 'intermediate-5-b', value: 'undefined', isCorrect: false },
      { id: 'intermediate-5-c', value: 'number', isCorrect: false },
      { id: 'intermediate-5-d', value: 'string', isCorrect: false },
    ],
    explanation: `Considering the placement of the return statement, it's easy to make the mistake of thinking the above code will result in #undefined#, although this is not the case. The result is #function# because JavaScript is compiled instead of being a purely interpreted language. Function declarations are evaluated during compile time, and therefore while creating the #bar# function #foo# is also created, since it is in the scope of #bar#.

    If it were a function expression instead of a declaration it would result in #undefined#, since it would not have been evaluated at compile time.`,
  },
  {
    id: 'intermediate-6',
    codeString: `
    function f() {
      console.log(this);
    }
    f();
    `,
    level: 'beginner',
    subjects: ['browser', 'scope'],
    title: 'What does the following code output on the browser?',
    answers: [
      { id: 'intermediate-6-a', value: 'window', isCorrect: true },
      { id: 'intermediate-6-b', value: 'f', isCorrect: false },
      { id: 'intermediate-6-c', value: "'function'", isCorrect: false },
      { id: 'intermediate-6-d', value: 'undefined', isCorrect: false },
    ],
    explanation: "Since the code above is not in strict mode, and because the value of #this# was not set by the call, #this# will default to the global object, in this case #window#.",
  },
];

