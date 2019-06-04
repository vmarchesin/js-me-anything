module.exports = [
  {
    id: 'intermediate-0',
    codeString: `function mul(x) {
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
console.log(mul(2)(3)(4)(5)(6));`,
    level: 'intermediate',
    subjects: ['currying'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'intermediate-0-a',
        value: '720',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-0-b',
        value: 'undefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-0-c',
        value: 'ReferenceError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-0-d',
        value: 'TypeError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: '',
  },
  {
    id: 'intermediate-1',
    codeString: '(function() { let i = 0; })();\nconsole.log(i);',
    level: 'intermediate',
    subjects: ['scope', 'ES6'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'intermediate-1-a',
        value: 'ReferenceError',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-1-b',
        value: "'0'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-1-c',
        value: 'undefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-1-d',
        value: '0',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation:
      'The #let# keyword is block scoped. In this case the variable only exists inside the function scope. Trying to access an undeclared variable will result in a #ReferenceError#',
  },
  {
    id: 'intermediate-2',
    codeString: `[...[...'...']].length`,
    level: 'intermediate',
    subjects: ['ES6'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'intermediate-2-a',
        value: '3',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-2-b',
        value: '1',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-2-c',
        value: 'Error',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-2-d',
        value: 'undefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation:
      "The spread operator enables us to iterate over any iterable object and spread its elements into an array. So here #'...'# represents a String (which is iterable in JavaScript). This means it results in an array like this #['.','.','.']#. The second spread operator does the exact same thing so the length will be #3#.",
  },
  {
    id: 'intermediate-3',
    codeString: 'let x = 2, { x: y = 1 } = { x }; y;',
    level: 'intermediate',
    subjects: ['ES6'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'intermediate-3-a',
        value: '2',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-3-b',
        value: '1',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-3-c',
        value: 'Error',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-3-d',
        value: '{ x: 1 }',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation:
      'The first #let x# defines #x# with the value #2#. #{x: y = 1} = {x}# is a destructuring assignment, it takes the variable #y# from the property #x#. In the end, because #x# is #2#, the default value #1# is ignored and #y# takes the value #2# from #x#.',
  },
  {
    id: 'intermediate-4',
    codeString: 'var x = 3.5;\nconsole.log(~~x);',
    level: 'intermediate',
    subjects: ['operators'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'intermediate-4-a',
        value: '3',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-4-b',
        value: '3.5',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-4-c',
        value: "'3'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-4-d',
        value: '-3',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation:
      'The tilde #~# is a NOT bitwise operator. The double tilde is just shorthand for truncating numbers to integers. It is used as a shorthand to #Math.floor()#, although it has a key difference in that it just removes any numbers after the decimal place. Therefore 3.5 becomes 3.',
  },
  {
    id: 'intermediate-5',
    codeString: `function bar() {
  return foo;
  foo = 10;
  function foo() {
    var foo = '11';
  }
}
console.log(typeof bar());`,
    level: 'intermediate',
    subjects: ['scope'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'intermediate-5-a',
        value: `'function'`,
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-5-b',
        value: `'undefined'`,
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-5-c',
        value: `'number'`,
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-5-d',
        value: `'string'`,
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: `Considering the placement of the return statement, it's easy to make the mistake of thinking the above code will result in #undefined#, although this is not the case. The result is #function# because JavaScript is compiled instead of being a purely interpreted language. Function declarations are evaluated during compile time, and therefore while creating the #bar# function #foo# is also created, since it is in the scope of #bar#.

    If it were a function expression instead of a declaration it would result in #undefined#, since it would not have been evaluated at compile time.`,
  },
  {
    id: 'intermediate-6',
    codeString: `function f() {
  console.log(this);
}
f();`,
    level: 'intermediate',
    subjects: ['browser', 'scope'],
    title: 'What does the following code output on the browser?',
    answers: [
      {
        id: 'intermediate-6-a',
        value: 'window',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-6-b',
        value: 'f',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-6-c',
        value: "'function'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-6-d',
        value: 'undefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation:
      'Since the code above is not in strict mode, and because the value of #this# was not set by the call, #this# will default to the global object, in this case #window#.',
  },
  {
    id: 'intermediate-7',
    codeString: `(function(x) {
  return (function(y) {
      console.log(x);
  })(2)
})(1);`,
    level: 'intermediate',
    subjects: ['scope'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'intermediate-7-a',
        value: '1',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-7-b',
        value: '2',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-7-c',
        value: 'undefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-7-d',
        value: 'ReferenceError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: `The output will be #1#, even though the value of #x# is never set in the inner function. Here’s why:

    A closure is a function, along with all variables or functions that were in-scope at the time that the closure was created. In JavaScript, a closure is implemented as an “inner function”; i.e., a function defined within the body of another function. An important feature of closures is that an inner function still has access to the outer function’s variables.

    Therefore, in this example, since x is not defined in the inner function, the scope of the outer function is searched for a defined variable #x#, which is found to have a value of #1#.`,
  },
  {
    id: 'intermediate-8',
    codeString: `const myObject = {
  foo: 'bar',
  func: function() {
      var self = this;
      console.log(this.foo);
      console.log(self.foo);
      (function() {
          console.log(this.foo);
          console.log(self.foo);
      }());
  }
};
myObject.func();`,
    level: 'intermediate',
    subjects: ['scope'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'intermediate-8-a',
        value: "'bar'\n'bar'\nundefined\n'bar'",
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-8-b',
        value: "'bar'\n'bar'\n'bar'\n'bar'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-8-c',
        value: "'bar'\nundefined\n'bar'\nundefined",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-8-d',
        value: "'bar'\n'bar'\nundefined\nundefined",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: `In the outer function, both #this# and #self# refer to #myObject# and therefore both can properly reference and access #foo#.

    In the inner function, though, #this# no longer refers to #myObject#. As a result, #this.foo# is #undefined# in the inner function, whereas the reference to the local variable #self# remains in scope and is accessible there.`,
  },
  {
    id: 'intermediate-9',
    level: 'intermediate',
    subjects: ['conceptual'],
    title: "Which of the following is false about the usage of #'use strict'#?",
    answers: [
      {
        id: 'intermediate-9-a',
        value: 'Enforces the usage of semicolons',
        applySyntaxHighlight: false,
        isCorrect: true,
      },
      {
        id: 'intermediate-9-b',
        value: 'Eliminates #this# coercion',
        applySyntaxHighlight: false,
        isCorrect: false,
      },
      {
        id: 'intermediate-9-c',
        value: 'Disallows duplicate parameter values',
        applySyntaxHighlight: false,
        isCorrect: false,
      },
      {
        id: 'intermediate-9-d',
        value: 'Throws error on invalid usage of #delete#',
        applySyntaxHighlight: false,
        isCorrect: false,
      },
    ],
    explanation: `
    Some of the key benefits of strict mode include:

    Makes debugging easier: Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.

    Prevents accidental globals: Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.

    Eliminates #this# coercion: Without strict mode, a reference to a #this# value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing #this# value of null or undefined throws an error.

    Disallows duplicate property names or parameter values: Strict mode throws an error when it detects a duplicate named property in an object (e.g., #var object = {foo: "bar", foo: "baz"};#) or a duplicate named argument for a function (e.g., #function foo(val1, val2, val1){}#), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.

    Makes #eval()# safer: There are some differences in the way #eval()# behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an #eval()# statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).

    Throws error on invalid usage of #delete#: The #delete# operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.
    `,
  },
  {
    id: 'intermediate-10',
    codeString: `(function(x) {
  console.log(x);
})(5);`,
    level: 'intermediate',
    subjects: ['conceptual'],
    title: "What's the name of the following pattern?",
    answers: [
      {
        id: 'intermediate-10-a',
        value: 'IIFE',
        applySyntaxHighlight: false,
        isCorrect: true,
      },
      {
        id: 'intermediate-10-b',
        value: 'AJAX',
        applySyntaxHighlight: false,
        isCorrect: false,
      },
      {
        id: 'intermediate-10-c',
        value: 'Callback',
        applySyntaxHighlight: false,
        isCorrect: false,
      },
      {
        id: 'intermediate-10-d',
        value: 'Functional',
        applySyntaxHighlight: false,
        isCorrect: false,
      },
    ],
    explanation: `
    An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

    It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator #()#. This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

    The second part creates the immediately executing function expression #()# through which the JavaScript engine will directly interpret the function. You can also pass parameters when invoking the function, as seen in the example above.
    `,
  },
  {
    id: 'intermediate-11',
    codeString: `foo();
var foo = function () {
  console.log('Hello');
}`,
    level: 'intermediate',
    subjects: ['scope'],
    title: 'What will be the output of the following code?',
    answers: [
      {
        id: 'intermediate-11-a',
        value: 'TypeError',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-11-b',
        value: "'Hello'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-11-c',
        value: 'ReferenceError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-11-d',
        value: 'undefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: `You'll be met with the error #TypeError: foo is not a function#, because in line 1 #foo# is #undefined#.

    When assigning a function to a variable (this is called a function expression), it will be defined at run-time (instead of parse/compile-time). This means you can't invoke it before the declaration. If you declare it without assigning it to a variable, you can use it anywhere in your code (even before the declaration).`,
    explanationCodeString: `foo(); // 'Hello'
function foo () {
  console.log('Hello');
}`,
  },
  {
    id: 'intermediate-12',
    codeString: `let y = 1;

 if (function f(){}) {
   y += typeof f;
 }
 console.log(y);`,
    level: 'intermediate',
    subjects: ['scope', 'types'],
    title: 'What will be the output of the following code?',
    answers: [
      {
        id: 'intermediate-12-a',
        value: "'1undefined'",
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-12-b',
        value: 'undefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-12-c',
        value: "'undefined'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-12-d',
        value: "'1function'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: `
    The scope of the function #f()# is restricted inside of the #if# condition in this case. Even though the statement will evaluate to true #Boolean(function f(){}) === true#, the function will not be defined aftwerwards.

    #typeof f# will result in #undefined#, and #1 + undefined# will result in #'1undefined'# after a type coercion to string.
    `,
  },
  {
    id: 'intermediate-13',
    codeString: `const a = {
  x: 1,
  y: 2,
};

const b = {
  a: 0,
  b: 1,
  x: 3,
};

const c = { ...a, ...b };
console.log(c);`,
    level: 'intermediate',
    subjects: ['operators', 'objects'],
    title: 'What will be the output of the following code?',
    answers: [
      {
        id: 'intermediate-13-a',
        value: '{ a: 0, b: 1, x: 3, y: 2 }',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-13-b',
        value: '{ a: 0, b: 1, x: 1, y: 2 }',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-13-c',
        value: '{ a: 0, b: 1, x: 1, x: 3, y: 2 }',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-13-d',
        value: 'SyntaxError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: `The spread syntax #...# copies own enumerable properties from a provided object onto a new object. In this case we are copying properties from #a# and #b# into #c#.

    However, since both #a# and #b# have the same property #x#, it will be overwritten when we spread #b# after #a# (an object cannot have two properties with the same key). The property #x# will end up having the value of the last assignment, in this case #x: 3#, inherited from #b#.`,
  },
  {
    id: 'intermediate-14',
    codeString: `let objA = { x: 42 };\nlet objB = objA;\nobjB.x = 0;\nconsole.log(objA.x);`,
    level: 'intermediate',
    subjects: ['objects'],
    title: 'What will be the output of the following code?',
    answers: [
      {
        id: 'intermediate-14-a',
        value: '0',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-14-b',
        value: '42',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-14-c',
        value: 'undefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-14-d',
        value: 'ReferenceError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation:
      "The output will be #0# because we're dealing with objects here. Objects are passed by reference, that is, #objA# and #objB# point to the same object in memory.",
  },
  {
    id: 'intermediate-14',
    codeString: `let objA = { x: 42 };\nlet objB = objA;\nobjB = {};\nconsole.log(objA.x);`,
    level: 'intermediate',
    subjects: ['objects'],
    title: 'What will be the output of the following code?',
    answers: [
      {
        id: 'intermediate-14-a',
        value: '42',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'intermediate-14-b',
        value: 'null',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-14-c',
        value: 'undefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'intermediate-14-d',
        value: 'ReferenceError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: `The output will #42#.

    When we assign #objA# to #objB#, the #objB# variable will point to the same object in memory as the #objA# variable.

    However, when we reassign #objB# to an empty object we simply change the #objB# reference. This doesn't affect #objA#.`,
  },
];
