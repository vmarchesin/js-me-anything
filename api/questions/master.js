module.exports = [
  {
    id: 'master-0',
    codeString: 'if( x <= 100 ) {...}\nif( !(x > 100) ) {...}',
    level: 'master',
    subjects: ['types'],
    title:
      'For which value of x the results of the following statements are not the same?',
    answers: [
      {
        id: 'master-0-a',
        value: 'NaN',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-0-b',
        value: "'100'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-0-c',
        value: '100',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-0-d',
        value: '[]',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content: `#NaN <= 100# and #NaN > 100# are #false# so if the value of x is #NaN# the statements are not the same. The same holds true for any value of x that being converted to #Number#, returns #NaN#.\n
        #undefined || [1,2,5] || { a:22 } // etc#
        \nThis is why you need to pay attention when you deal with numeric variables. #NaN# can’t be equal, less than or more than any other numeric value, so the only reliable way to check if the value is #NaN# is to use #isNaN()#.
        `,
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-1',
    codeString: `const output = (function(x) {
  delete x;
  return x;
})(0);
console.log(output);`,
    level: 'master',
    subjects: ['operators'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'master-1-a',
        value: '0',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-1-b',
        value: 'undefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-1-c',
        value: 'null',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-1-d',
        value: 'ReferenceError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content: `The code above will output 0. The #delete# operator is used to delete a property from an object. Here x is not an object, it's a local variable. The #delete# operator doesn't affect local variables.`,
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-2',
    codeString: `let x = { foo : 1};
let output = (function() {
  delete x.foo;
  return x.foo;
})();
console.log(output);`,
    level: 'master',
    subjects: ['operators'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'master-2-a',
        value: 'undefined',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-2-b',
        value: '1',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-2-c',
        value: 'null',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-2-d',
        value: 'ReferenceError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content: `The code above will output #undefined#. The #delete# operator is used to delete a property from an object. Here x is an object which has #foo# as a property, then from a self-invoking function we are deleting the #foo# property of the object x. After deletion, we are trying to reference the deleted property #foo# which results in #undefined#.
        `,
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-3',
    codeString:
      "let trees = ['xyz', 'xxxx', 'foo', 'ryan', 'apple'];\ndelete trees[3];\nconsole.log(trees.length);",
    level: 'master',
    subjects: ['arrays', 'operators'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'master-3-a',
        value: '5',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-3-b',
        value: '4',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-3-c',
        value: 'undefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-3-d',
        value: 'ReferenceError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content: `The code above will output #5#. When we use the #delete# operator to delete an array element the array length is not affected. This holds true even if you delete all elements from an array using the #delete# operator.
        `,
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-4',
    codeString: `var salary = "1000$";

(function () {
  console.log(salary);
  var salary = "5000$";
  console.log(salary);
})();`,
    level: 'master',
    subjects: ['scope'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'master-4-a',
        value: "undefined\n'5000$'",
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-4-b',
        value: "'1000$'\n'5000$'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-4-c',
        value: "'1000$'\nundefined",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-4-d',
        value: "'1000$'\n'1000$'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content:
          "The code above will output: #undefined, '5000$'# because of hoisting. You might be expecting #salary# to retain its value from the outer scope until the point that #salary# was redeclared in the inner scope. But due to hoisting, #salary# was #undefined# instead. To better understand it, have a look at the following code.",
        isCodeSection: false,
      },
      {
        content: `var salary = "1000$";

(function () {
  var salary = undefined;
  console.log(salary);
  salary = "5000$";
  console.log(salary);
})();`,
        isCodeSection: true,
      },
      {
        content: `Here #salary# is hoisted and declared at the top inside the function scope. When we print its value using #console.log# the result is #undefined#. Afterwards the variable is redeclared and the new value #"5000$"# is assigned to it.`,
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-5',
    codeString: `(function() {
  return [
    (() => this.x).bind({ x: 'inner' })(),
    (() => this.x)(),
  ];
}).call({ x: 'outer' });`,
    level: 'master',
    subjects: ['scope', 'ES6'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'master-5-a',
        value: "['outer', 'outer']",
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-5-b',
        value: "['inner', 'outer']",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-5-c',
        value: "['inner', 'inner']",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-5-d',
        value: 'Error',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content:
          "Arrow functions have lexical #this#, it inherits value from the context they are defined in. In this case both #this# calls are made within the context of #{x:'outer'}#. The fact that #.bind({x:'inner'})# is applied on the first function doesn't change its value.",
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-6',
    codeString: `function aaa() {
  return
  {
    test: 1
  };
}
console.log(typeof aaa());`,
    level: 'master',
    subjects: ['conceptual'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'master-6-a',
        value: "'undefined'",
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-6-b',
        value: "'function'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-6-c',
        value: "'object'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-6-d',
        value: 'ReferenceError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content:
          "This is an exercise in JavaScript's automatic semicolon insertion. While this code looks correct, JavaScript inserts semicolons where it thinks the user has missed them. This is what the code will look like after the automatic semicolon insertion:",
        isCodeSection: false,
      },
      {
        content:
          'function aaa() {\n  return;\n  {\n    test: 1\n  };\n}\nconsole.log(typeof aaa());',
        isCodeSection: true,
      },
      {
        content:
          'As you can see, the function does not return the object as you would expect, and results in the type of the function return being #undefined#, instead of #object# as you might expect.',
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-7',
    codeString: `function user(name) {
  this.type = name;
  console.log(this);
}
var user1 = new user('foo');`,
    level: 'master',
    subjects: ['browser', 'scope'],
    title: 'What does the following code output on the browser?',
    answers: [
      {
        id: 'master-7-a',
        value: 'user',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-7-b',
        value: 'user1',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-7-c',
        value: "'window'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-7-d',
        value: "'foo'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content:
          'When a function is used as a constructor (with the #new# keyword), it is bound to the new object being constructed, changing the value of #this#.',
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-8',
    codeString: `var arr = [1, 2, 3];
for(var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(arr[i]);
  }, 3000);
}`,
    level: 'master',
    subjects: ['scope'],
    title: 'What does the following code output on the browser?',
    answers: [
      {
        id: 'master-8-a',
        value: 'undefined\nundefined\nundefined',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-8-b',
        value: '1\n2\n3',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-8-c',
        value: '0\n1\n2',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-8-d',
        value: 'ReferenceError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content:
          'The reason for this is because the #setTimeout# function creates a function (the closure) that has access to its outer scope, which is the loop that contains the index #i#. After 3 seconds go by, the function is executed and it prints out the value of #arr[i]#, which at the end of the loop #i# is at 3 because it cycles through 0, 1, 2, 3 and the loop finally stops at 3. #arr[3]# does not exist, which is why you get undefined.',
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-9',
    codeString: `(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1, y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();`,
    level: 'master',
    subjects: ['scope'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'master-9-a',
        value: `1\nundefined\n2`,
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-9-b',
        value: '1\n1\n2',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-9-c',
        value: 'undefined\nundefined\nundefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-9-d',
        value: '1\nundefined\nundefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content:
          '#var# statements are hoisted (without their value initialization) to the top of the global or function scope it belongs to, even when it’s inside a with or catch block. However, the error’s identifier is only visible inside the catch block. It is equivalent to:',
        isCodeSection: false,
      },
      {
        content: `(function () {
  var x, y; // outer and hoisted
  try {
    throw new Error();
  } catch (x /* inner */) {
    x = 1; // inner x, not the outer one
    y = 2; // there is only one y, which is in the outer scope
    console.log(x /* inner */);
  }
  console.log(x);
  console.log(y);
})();`,
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-10',
    codeString: `var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);`,
    level: 'master',
    subjects: ['scope', 'browser', 'objects'],
    title: 'What does the following code output on the browser?',
    answers: [
      {
        id: 'master-10-a',
        value: `10\n2`,
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-10-b',
        value: '10\n5',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-10-c',
        value: 'undefined\nundefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-10-d',
        value: '10\nundefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content: `Why isn’t it #10# and #5#?

        In the first place, as #fn# is passed as a parameter to the function #method#, the #this# of the function #fn# is #window#. #var length = 10# is declared at the #window# level. It also can be accessed as #window.length# or #length# or #this.length# (when #this === window#).

        #method# is bound to #Object obj#, and #obj.method# is called with parameters #fn# and #1#. Though #method# is accepting only one parameter, while invoking it has passed two parameters; the first is a function callback and other is just a number.

        When #fn()# is called inside #method#, which was passed the function as a parameter at the global level, #this.length# will have access to #var length = 10# (declared globally) not #length = 5# as defined in #Object obj#.

        Now, we know that we can access any number of arguments in a JavaScript function using the #arguments# array.

        Hence #arguments[0]()# is nothing but calling #fn()#. Inside #fn# now, the scope of this function becomes the #arguments# array, and logging the length of #arguments# will return #2#.`,
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-11',
    codeString:
      "var a={}, b={key:'b'}, c={key:'c'};\na[b]=123;\na[c]=456;\nconsole.log(a[b]);",
    level: 'master',
    subjects: ['types', 'objects'],
    title: 'What does the following code output?',
    answers: [
      {
        id: 'master-11-a',
        value: '456',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-11-b',
        value: '123',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-11-c',
        value: 'undefined',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-11-d',
        value: "{key: 'b'}",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content: `The output of this code will be #456#, not #123#.

        The reason for this is as follows: when setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since #b# and #c# are both objects, they will both be converted to #'[object Object]'#. As a result, #a[b]# and #a[c]# are both equivalent to #a['[object Object]']# and can be used interchangeably. Therefore, setting or referencing #a[c]# is precisely the same as setting or referencing #a[b]#.
        `,
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-12',
    codeString: '018 - 017',
    level: 'master',
    subjects: ['types', 'operators'],
    title: 'What is the result of the following operation?',
    answers: [
      {
        id: 'master-12-a',
        value: '3',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-12-b',
        value: '1',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-12-c',
        value: '001',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-12-d',
        value: "'001'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content: `The fact that #018 - 017# returns #3# is a result of silent type conversion. In this case, we’re talking about octal (base 8) numbers.

        In JavaScript, the prefix #0# will convert any number to octal. However, #8# is not used in octal and any number containing an #8# will be silently converted to a regular decimal number.

        Therefore, #018 - 017# is in fact equivalent to the decimal expression #18 - 15#, because #017# is octal but #018# is decimal.`,
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-13',
    codeString: '0.1 + 0.2',
    level: 'master',
    subjects: ['conceptual'],
    title: 'What is the result of the following operation?',
    answers: [
      {
        id: 'master-13-a',
        value: '0.30000000000000004',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-13-b',
        value: '0.3',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-13-c',
        value: '0.30001',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-13-d',
        value: '0.30000000000000001',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content: `Because JavaScript uses the IEEE 754 standard for Math, it makes use of 64-bit floating numbers. This causes precision errors when doing floating point (decimal) calculations, in short, due to computers working in Base 2 while decimal is Base 10.

        A simple solution to this problem is:`,
        isCodeSection: false,
      },
      {
        content:
          'let x = 0.1,\ny = 0.2;\nlet z = +(x + y).toFixed(1); // z === 0.3',
        isCodeSection: true,
      },
      {
        content:
          "Here the numbers are added together, returning the erroneous floating number. It is then set using #toFixed# as a string #'0.3'#. Finally the #+# symbol casts the string back to a valid #Number# so that it can be worked with again.",
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-14',
    codeString: 'Math.max() > Math.min()',
    level: 'master',
    subjects: ['conceptual'],
    title: 'What is the result of the following comparison?',
    answers: [
      {
        id: 'master-14-a',
        value: 'false',
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-14-b',
        value: 'true',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-14-c',
        value: 'NaN',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-14-d',
        value: 'TypeError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content: `The fact that #Math.max() > Math.min()# returns false sounds wrong, but it actually makes a lot of sense.

        If no arguments are given, #Math.min()# returns #infinity# and #Math.max()# returns #-infinity#. This is simply part of the specification for the #max()# and #min()# methods, but there is good logic behind the choice.`,
        isCodeSection: false,
      },
      {
        content:
          'Math.min(1) // 1\nMath.min(1, infinity) // 1\nMath.min(1, -infinity) // -infinity',
        isCodeSection: true,
      },
      {
        content:
          'If #-infinity# was considered the default argument of #Math.min()#, then every result would be #-infinity#, which would be useless. Whereas, if the default argument is #infinity#, the addition of any other argument would return that number, and that’s the behaviour we want.',
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-15',
    codeString: `const person = {
  name: 'John',
};
person.salary = '10000';
person['country'] = 'USA';

Object.defineProperty(person, 'phone',{
  value : '555 555 5555',
  enumerable: false,
});

console.log(Object.keys(person));`,
    level: 'master',
    subjects: ['objects', 'ES6'],
    title: 'What will be the output of the following code?',
    answers: [
      {
        id: 'master-15-a',
        value: "['name', 'salary', 'country']",
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-15-b',
        value: "['name', 'salary', 'country', 'phone']",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-15-c',
        value: "['name']",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-15-d',
        value: 'ReferenceError',
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content: `The method #Object.defineProperty()# can be used to assign properties with special values to objects. One of these values is #enumerable#, which can be used to define if a property is enumerable, that is, if it will be displayed when listing the object properties.

        If a property is not enumerable it still can be accessed normally, but it won't be shown when iterating over keys or listing (for example, by using #Object.keys()#). So #'phone'# will not be displayed in the code above.

        As for the variable #person#, the #const# declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. In this case, where #person# is an object, this means the object's contents (e.g., its properties) can be altered.`,
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-16',
    codeString: `const dog = {
  say: function(animal) {
    console.log(animal + ' says woof');
  },
};

const cat = {
  say: function(animal) {
    console.log(animal + ' says meow');
  },
};

function pet(animal) {
  this.say(animal);
}

pet.call(cat, 'dog');`,
    level: 'master',
    subjects: ['scope'],
    title: 'What will be the output of the following code?',
    answers: [
      {
        id: 'master-16-a',
        value: "'dog says meow'",
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-16-b',
        value: "'dog says woof'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-16-c',
        value: "'cat says woof'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-16-d',
        value: "'cat says meow'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content: `The #call()# method calls a function with a given #this# value and arguments provided individually. In the scenario above we are calling the #pet# function while provinding the scope of #cat#. This basically binds the #this# of the function to the #this# of the object #cat#. Since #cat# contains the property #say#, #cat.say# will be called passing #animal# as an argument.

        We pass #'dog'# as the second argument to the #call# method. Any arguments after the first will be passed down to the function being called. This effectively passes #'dog'# to the #cat.say# method, resulting in #'dog says meow'#.`,
        isCodeSection: false,
      },
    ],
  },
  {
    id: 'master-17',
    codeString: `bar();
(function foo(){console.log('foo')})();
function bar(){console.log('bar')};`,
    level: 'master',
    subjects: ['scope'],
    title: 'What will be the output of the following code?',
    answers: [
      {
        id: 'master-17-a',
        value: "'bar'\n'foo'",
        applySyntaxHighlight: true,
        isCorrect: true,
      },
      {
        id: 'master-17-b',
        value: "'foo'\n'bar'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-17-c',
        value: "'bar'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
      {
        id: 'master-17-d',
        value: "'foo'",
        applySyntaxHighlight: true,
        isCorrect: false,
      },
    ],
    explanation: [
      {
        content:
          "The function #bar# is hoisted before the code execution, meaning it will be available even if it's been declared after being called. This makes it run before #foo#.",
        isCodeSection: false,
      },
    ],
  },
];
