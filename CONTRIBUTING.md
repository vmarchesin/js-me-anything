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
  answers: Array<{ id: String, value: String, isCorrect: Boolean}>,
  explanation: String,
  explanationCodeString: String,
}
```

- **id**

The id must be unique across all questions. To keep things simple please follow the pattern `difficulty-number`. For example `beginner-3` or `master-7`. Find the last question pertaining your difficulty and use the next available number. So if the last question with the master difficulty is `master-10` use the id `master-11` for your question when creating a pull request.

- **codeString**

This will be shown as code inside a \<pre> tag. It is recommended to use template literals (\`string\`) because they offer a better line break format.

- **level**

This must be either `beginner`, `intermediate` or `master`. It may sound irrelevant since the question is already placed inside the proper file but the questions may be mixed up when playing with subjects.

- **subjects**

The subjects property must be an array with relevant subjects as elements. For example, if a question is about arrow functions it may have `'scope'` and `'ES6'` as subjects.

All subjects must be lowercase, with the exception of abbreviations ans acronyms (for example ES6) which must be all uppercase, due to how they're parsed and presented.

When adding a new question look for existing subjects and avoid creating new ones. If you truly consider no existing subject contemplate your question feel free to create a new one, but make it clear when creating your pull request.

- **title**

The question itself. Ask your question and provide any needed information here.

- **answers** (must have at least 4)
  - **id**

  The id of the answer. Must be unique across all answers inside the same question. To make things easy use `difficulty-number-option` as a pattern. For example, the question `intermediate-9` should have the answers `intermediate-9-a`, `intermediate-9-b`, etc.

  - **value**

  The answer that is displayed on screen. Since answers may depend on the primitive type, use the following convention:

  `Number`: for number types simply put the value. Example: `3`.

  `String`: If you want to imply the output is a string, wrap it around single quotes. Example: `'3'`.

  `Array|Object`: Always put spaces if touching brackets to avoid bad formatting. Avoid `[]` and use `[ ]` for example.

  `Primitives`: `null`, `undefined`, `function`, `Error`, `true`, etc, can be simply displayed as is. If it's not a string, simply don't put quotes around it.

  Avoid mixing text answers and code output answers in the same question to prevent confusion.

  - **isCorrect**

  A boolean to show if the answer is correct or not. Only one answer may be correct.

- **explanation**

A string to explain the answer. It will be shown only after an answer has been selected. This is parsed before displaying, so you can put formatted code inside. To highlight code on this string just wrap it around two `#` characters. Example:

`The length of the #[1, 2, 3]# array is #3#`

The content inside `##` will be highlited inside a \<pre> tag.

- **explanationCodeString**

If you wish to provide another block of code to explain the answer, do it here. This will be displayed at the end, after the `explanation`, and shares the same principles of `codeString`.

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
        { id: 'beginner-20-a', value: "'11'", isCorrect: true },
        { id: 'beginner-20-b', value: '11', isCorrect: false },
        { id: 'beginner-20-c', value: 'number', isCorrect: false },
        { id: 'beginner-20-d', value: '1', isCorrect: false },
    ],
    explanation: `
    Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on).

    The #+# operator will coerce numbers to strings when performing an operation with strings, resulting in #'11'# instead of #11#.
    `,
},
```

## Features and changes

If you wish to change the behavior of the game or add a new feature, please open an Issue to discuss it first. Pull requests that alter any game behavior will be declined without prior discussion.

Pull requests that fix bugs or errors in questions will be accepted, as long as they don't change the game behavior.

## Issues

If you have any questions about how to contribute, or want to discuss existing questions, feel free to open an Issue.