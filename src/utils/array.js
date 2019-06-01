/* eslint-disable no-param-reassign */
// Knuth Shuffle
export function shuffle(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  let currIdx = array.length;

  while (currIdx !== 0) {
    const randIdx = Math.floor(Math.random() * currIdx);
    currIdx -= 1;
    [array[currIdx], array[randIdx]] = [array[randIdx], array[currIdx]];
  }

  return array;
}
