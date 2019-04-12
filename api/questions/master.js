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
      { id: 'master-0-a', value: '100', isCorrect: true },
      { id: 'master-0-b', value: "'100'", isCorrect: false },
      { id: 'master-0-c', value: 'NaN', isCorrect: false },
      { id: 'master-0-d', value: '[ ]', isCorrect: false },
    ],
    explanation: `
    #NaN <= 100# and #NaN > 100# are #false# so if the value of x is #NaN# the statements are not the same. The same holds true for any value of x that being converted to Number, returns NaN.\n
    #undefined || [1,2,5] || {a:22} // etc#
    \nThis is why you need to pay attention when you deal with numeric variables. #NaN# can’t be equal, less than or more than any other numeric value, so the only reliable way to check if the value is #NaN#, is to use #isNaN()# function.
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
    title: 'What will be the output of the following code?',
    answers: [
      { id: 'master-1-a', value: '0', isCorrect: true },
      { id: 'master-1-b', value: "undefined", isCorrect: false },
      { id: 'master-1-c', value: 'null', isCorrect: false },
      { id: 'master-1-d', value: 'Reference Error', isCorrect: false },
    ],
    explanation: `
    The code above will output 0. The #delete# operator is used to delete a property from an object. Here x is not an object, it's local variable. The #delete# operator doesn't affect local variables.
    `,
  },
];


