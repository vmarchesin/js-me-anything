const beginner = require('./beginner');
const intermediate = require('./intermediate');
const master = require('./master');

module.exports = [...beginner, ...intermediate, ...master];
