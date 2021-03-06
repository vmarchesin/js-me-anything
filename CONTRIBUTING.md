# Contributing to JS Me Anything

JS Me Anything is a open source repository of questions about JavaScript. Anyone is welcome to add new questions and make them available to the game. However in order to do that a few rules must be followed:

## Rules

If you wish to include a new question you must fork the repository and create a pull request with your new question. If any of the following rules is not met, the pull request will be declined.

1. **One question per pull request**
    - This is to prevent duplicate/similar questions being approved at the same time by multiple contributors.
2. **The question must be JS related**
    - This goes without saying, but this is a JavaScript related game. Questions pertaining other programming languages will not be accepted. Mentioning other languages in a question is acceptable, as long as a point is made about JavaScript.
3. **A question must have one, and only one, correct answer**
    - As you can imagine any question must have a correct answer. If two or more answers are correct, or none is correct, the pull request will be declined. If more than one answer is acceptable to the question, only one should be present and an explanation must be made about it.
4. **The question must follow the proper schema**
    - In order to have the question properly appear on the game it must follow the correct schema. More on the schema in the **Schema** section below.

## Difficulty

There are currently 3 levels of difficulty: [*Beginner*](https://github.com/vmarchesin/js-me-anything/blob/master/api/questions/beginner.js), [*Intermediate*](https://github.com/vmarchesin/js-me-anything/blob/master/api/questions/intermediate.js) and [*Master*](https://github.com/vmarchesin/js-me-anything/blob/master/api/questions/master.js). When adding a new question have in mind the difficulty level and place it in the correct file. Difficulty is subjective and discussion may arise about the proper place of each question. If you consider an existing question has the wrong difficulty set to it you can open an Issue about it and it will be discussed.

## Schema

Any submitted question must follow the question schema presented below. Any changes to the schema will be reflected in the changelog and in this document.

```js
{
  id: String,
  codeString: String,
  level: String,
  subjects: Array<String>,
  title: String,
  answers: Array<{ id: String, value: String, applySyntaxHighlight: Boolean, isCorrect: Boolean }>,
  explanation: Array<{ content: String, isCodeSection: Boolean }>,
}
```

- **id**

The id must be unique across all questions. You must follow the pattern `difficulty-number`. For example `beginner-3` or `master-7`. Find the last question pertaining your difficulty and use the next available number. So if the last question with the master difficulty is `master-10` use the id `master-11` for your question when creating a pull request. You don't need to check every previous question. If a question is replaced or deleted its `id` will never be used again.

- **codeString**

This will be shown as code inside a \<pre> tag. It is recommended to use template literals (\`string\`) because they offer a better line break format.

- **level**

This must be either `beginner`, `intermediate` or `master`. It may sound irrelevant since the question is already placed inside the proper file but the questions may be mixed up when playing with subjects.

- **subjects**

The subjects property must be an array with relevant subjects as elements. For example, if a question is about arrow functions it may have `'scope'` and `'ES6'` as subjects.

All subjects must be lowercase, with the exception of abbreviations ans acronyms (for example ES6) which must be all uppercase, due to how they're parsed and presented.

When adding a new question look for existing subjects and avoid creating new ones. If you truly consider no existing subject contemplate your question feel free to create a new one, but make it clear when creating your pull request.

- **title**

The question itself. Ask your question and provide any needed information here. You can highlight syntax by wrapping any part of the text between `##`.

- **answers** (must have at least 4)
  - **id**

  The id of the answer. You must use `difficulty-number-option` as a pattern. For example, the question `intermediate-9` should have the answers `intermediate-9-a`, `intermediate-9-b`, etc.

  - **value**

  The answer that is displayed on screen. Since answers may depend on the primitive type, and syntax highligh, use the following convention:

  `Number`: for number types simply put the value. Example: `3`.

  `String`: If you want to highlight the output as a string, wrap it around single quotes. Example: `'3'`.

  `Primitives`: `null`, `undefined`, `function`, `Error`, `true`, etc, can be simply displayed as is. If it's not a string, simply don't put quotes around it.

  Remember that every value should be stored as string. So `value: '3'` will be displayed as a `Number` (after dropping the string quotes) and `value: "'3'"` will be displayed as `String` (after dropping the string quotes, the remaining quotes will highlight it as `String`).

  Avoid mixing text answers and code output answers in the same question without syntax highlight to prevent confusion.

  - **applySyntaxHighlight**

  If `true` the answer will be encapsulated in a syntax highlight \<pre> block for JS. Even if it's `false` you can apply syntax highlight to specific parts of the answer by wrapping the content inside `##`, same as other fields.

  - **isCorrect**

  A boolean to show if the answer is correct or not. Only one answer may be correct.

- **explanation**

An array with the content to be displayed as the explanation to the answer. It's designed this way to maintain a single schema (avoiding returning different types for this field) and allowing you to insert code blocks inside the explanation.

Every element of the array will be displayed as a html tag. If `isCodeSection` is `false` the section will be rendered inside a \<div> tag, and if it's `true` it will be rendered as a code block inside a \<pre> tag.

If `isCodeSection` is `false`, to highlight code on the `content` string just wrap it around `##` characters. Example:

`The length of the #[1, 2, 3]# array is #3#`

## Example Question

Here's an example for a new question. Use this format to submit new questions.

```js
{
    id: 'beginner-20',
    codeString: "console.log(1 + '1');",
    level: 'beginner',
    subjects: ['operators', 'types'],
    title: 'What will be the output of the following code?',
    answers: [
        { id: 'beginner-20-a', value: "'11'", applySyntaxHighlight: true, isCorrect: true },
        { id: 'beginner-20-b', value: '11', applySyntaxHighlight: true, isCorrect: false },
        { id: 'beginner-20-c', value: "'number'", applySyntaxHighlight: true, isCorrect: false },
        { id: 'beginner-20-d', value: '1', applySyntaxHighlight: true, isCorrect: false },
    ],
    explanation: [
        {
            content: `Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on).

            The #+# operator will coerce numbers to strings when performing an operation with strings, resulting in #'11'# instead of #11#.`,
            isCodeSection: false,
        },
        {
            content: "console.log('1' + 1); // also '11'",
            isCodeSection: true,
        },
    ],
},
```

## Features and changes

If you wish to change the behavior of the game or add a new feature, please open an Issue to discuss it first. Pull requests that alter any game behavior will be declined without prior discussion.

Pull requests that fix bugs or errors in questions will be accepted, as long as they don't change the game behavior.

## Issues

If you have any questions about how to contribute, or want to discuss existing questions, feel free to open an Issue.

## References

The following pages and repositories have been used as sources and/or inspiration for questions. If you feel your work has not been credited, or does not belong here, please contact [@devmarchesin](https://twitter.com/devmarchesin) for inquiries.

* https://www.geeksforgeeks.org/commonly-asked-javascript-interview-questions-set-1/
* https://www.guru99.com/javascript-interview-questions-answers.html
* https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions
