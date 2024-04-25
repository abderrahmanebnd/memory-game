export function randomNumbersIcons(theme, size) {
  let icons = [
    "anchor-solid",
    "atom-solid",
    "bolt-lightning-solid",
    "bomb-solid",
    "book-solid",
    "carrot-solid",
    "cat-solid",
    "crow-solid",
    "fish-solid",
    "flask-solid",
    "hat-wizard-solid",
    "jet-fighter-up-solid",
    "lightbulb-solid",
    "meteor-solid",
    "moon-solid",
    "star-solid",
    "terminal-solid",
    "tree-solid",
  ];

  let items = [];

  if (theme === "Icons") {
    const shuffledIcons = shuffleArray(icons).slice(0, size / 2);
    const pairedIcons = [...shuffledIcons, ...shuffledIcons];
    const finalIcons = shuffleArray(pairedIcons);

    items = finalIcons;
  } else if (theme === "Numbers") {
    const numbers = Array.from({ length: size / 2 }).map(
      (_, index) => index + 1
    );
    const pairedNumbers = [...numbers, ...numbers];
    const finalNumbers = shuffleArray(pairedNumbers);

    items = finalNumbers;
  }

  return items;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
