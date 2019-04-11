// Knuth Shuffle
export function shuffle(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  let currentIndex = array.length;

  while (0 !== currentIndex) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
