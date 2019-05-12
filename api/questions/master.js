module.exports = [
  {
    id: 'master-0',
    codeString: `
    if( x <= 100 ) {...}
    if( !(x > 100) ) {...}
    `,
    level: 'master',
    subjects: ['types'],
    title: 'For which value of x the results of the following statements are not the same?',
    answers: [
      { id: 'master-0-a', value: 'NaN', isCorrect: true },
      { id: 'master-0-b', value: "'100'", isCorrect: false },
      { id: 'master-0-c', value: '100', isCorrect: false },
      { id: 'master-0-d', value: '[ ]', isCorrect: false },
    ],
    explanation: `
    #NaN <= 100# and #NaN > 100# are #false# so if the value of x is #NaN# the statements are not the same. The same holds true for any value of x that being converted to #Number#, returns #NaN#.\n
    #undefined || [1,2,5] || { a:22 } // etc#
    \nThis is why you need to pay attention when you deal with numeric variables. #NaN# can’t be equal, less than or more than any other numeric value, so the only reliable way to check if the value is #NaN# is to use #isNaN()#.
    `,
  },
  {
    id: 'master-1',
    codeString: `
    const output = (function(x) {
      delete x;
      return x;
    })(0);

    console.log(output);
    `,
    level: 'master',
    subjects: ['operators'],
    title: 'What does the following code output?',
    answers: [
      { id: 'master-1-a', value: '0', isCorrect: true },
      { id: 'master-1-b', value: "undefined", isCorrect: false },
      { id: 'master-1-c', value: 'null', isCorrect: false },
      { id: 'master-1-d', value: 'ReferenceError', isCorrect: false },
    ],
    explanation: `
    The code above will output 0. The #delete# operator is used to delete a property from an object. Here x is not an object, it's a local variable. The #delete# operator doesn't affect local variables.
    `,
  },
  {
    id: 'master-2',
    codeString: `
    let x = { foo : 1};
    let output = (function() {
      delete x.foo;
      return x.foo;
    })();

    console.log(output);
    `,
    level: 'master',
    subjects: ['operators'],
    title: 'What does the following code output?',
    answers: [
      { id: 'master-2-a', value: 'undefined', isCorrect: true },
      { id: 'master-2-b', value: "1", isCorrect: false },
      { id: 'master-2-c', value: 'null', isCorrect: false },
      { id: 'master-2-d', value: 'ReferenceError', isCorrect: false },
    ],
    explanation: `
    The code above will output #undefined#. The #delete# operator is used to delete a property from an object. Here x is an object which has #foo# as a property, then from a self-invoking function we are deleting the #foo# property of the object x. After deletion, we are trying to reference the deleted property #foo# which results in #undefined#.
    `,
  },
  {
    id: 'master-3',
    codeString: `
    let trees = ["xyz", "xxxx", "test", "ryan", "apple"];
    delete trees[3];

    console.log(trees.length);
    `,
    level: 'master',
    subjects: ['arrays', 'operators'],
    title: 'What does the following code output?',
    answers: [
      { id: 'master-3-a', value: '5', isCorrect: true },
      { id: 'master-3-b', value: '4', isCorrect: false },
      { id: 'master-3-c', value: 'undefined', isCorrect: false },
      { id: 'master-3-d', value: 'ReferenceError', isCorrect: false },
    ],
    explanation: `
    The code above will output #5# as output. When we use the #delete# operator to delete an array element the array length is not affected. This holds true even if you delete all elements from an array using the #delete# operator.
    `,
  },
  {
    id: 'master-4',
    codeString: `
    var salary = "1000$";

    (function () {
      console.log(salary);
      var salary = "5000$";
      console.log(salary);
    })();
    `,
    level: 'master',
    subjects: ['scope'],
    title: 'What does the following code output?',
    answers: [
      { id: 'master-4-a', value: "undefined, '5000$'", isCorrect: true },
      { id: 'master-4-b', value: "'1000$', '5000$'", isCorrect: false },
      { id: 'master-4-c', value: "'1000$', undefined", isCorrect: false },
      { id: 'master-4-d', value: "'1000$', '1000$'", isCorrect: false },
    ],
    explanation: `
    The code above will output: #undefined, 5000$# because of hoisting. You might be expecting #salary# to retain its value from the outer scope until the point that #salary# was redeclared in the inner scope. But due to hoisting, #salary# was #undefined# instead. To better understand it, have a look at the following code. Here #salary# is hoisted and declared at the top inside the function scope. When we print its value using #console.log# the result is #undefined#. Afterwards the variable is redeclared and the new value #"5000$"# is assigned to it.
    `,
    explanationCodeString: `
    var salary = "1000$";

    (function () {
      var salary = undefined;
      console.log(salary);
      salary = "5000$";
      console.log(salary);
    })();
    `,
  },
  {
    id: 'master-5',
    codeString: `
    (function() {
      return [
        (() => this.x).bind({ x: 'inner' })(),
        (() => this.x)(),
      ];
    }).call({ x: 'outer' });
    `,
    level: 'master',
    subjects: ['scope', 'ES6'],
    title: 'What does the following code output?',
    answers: [
      { id: 'master-5-a', value: "['outer', 'outer']", isCorrect: true },
      { id: 'master-5-b', value: "['inner', 'outer']", isCorrect: false },
      { id: 'master-5-c', value: "['inner', 'inner']", isCorrect: false },
      { id: 'master-5-d', value: 'Error', isCorrect: false },
    ],
    explanation: `
    Arrow functions have lexical #this#, it inherits value from the context they are defined in. In this case both #this# calls are made within the context of #{x:'outer'}#. The fact that #.bind({x:'inner'})# is applied on the first function doesn't change its value.
    `,
  },
  {
    id: 'master-6',
    codeString: `
    function aaa() {
      return
      {
        test: 1
      };
    }
    console.log(typeof aaa());
    `,
    level: 'master',
    subjects: ['conceptual'],
    title: 'What does the following code output?',
    answers: [
      { id: 'master-6-a', value: "'undefined'", isCorrect: true },
      { id: 'master-6-b', value: "'function'", isCorrect: false },
      { id: 'master-6-c', value: "'object'", isCorrect: false },
      { id: 'master-6-d', value: 'ReferenceError', isCorrect: false },
    ],
    explanation: "This is an exercise in JavaScript's automatic semicolon insertion. While this code looks correct, JavaScript inserts semicolons where it thinks the user has missed them. Once JS has done this the function changes to the code below, which does not return the object as you would expect, and results in the type of the function being #undefined#, instead of #object# as you might expect.",
    explanationCodeString: `
    function aaa() {
      return;
      {
        test: 1
      };
    }
    console.log(typeof aaa());
    `,
  },
  {
    id: 'master-7',
    codeString: `
    function user(name) {
      this.type = name;
      console.log(this);
    }
    var user1 = new user('foo');
    `,
    level: 'beginner',
    subjects: ['browser', 'scope'],
    title: 'What does the following code output on the browser?',
    answers: [
      { id: 'master-7-a', value: 'user', isCorrect: true },
      { id: 'master-7-b', value: 'user1', isCorrect: false },
      { id: 'master-7-c', value: "'window'", isCorrect: false },
      { id: 'master-7-d', value: "'foo'", isCorrect: false },
    ],
    explanation: "When a function is used as a constructor (with the #new# keyword), it is bound to the new object being constructed, changing the value of #this#.",
  },
];


