import React from "react";
import {
  FaAccessibleIcon,
  FaBowlingBall,
  FaAnchor,
  FaApple,
  FaBomb,
  FaBolt,
  FaBook,
  FaCamera,
  FaCar,
  FaCat,
  FaAirFreshener,
  FaAffiliatetheme,
  FaAlgolia,
  FaBaby,
  FaBicycle,
  FaCrow,
} from "react-icons/fa";

export function randomNumbersIcons(theme, size) {
  let icons = [
    FaAccessibleIcon,
    FaBowlingBall,
    FaAnchor,
    FaApple,
    FaBomb,
    FaBolt,
    FaBook,
    FaCamera,
    FaCar,
    FaCat,
    FaAffiliatetheme,
    FaAirFreshener,
    FaAlgolia,
    FaBaby,
    FaBicycle,
    FaCrow,
  ];

  let items = [];

  if (theme === "Icons") {
    const shuffledIcons = shuffleArray(icons).slice(0, size / 2);
    const pairedIcons = [...shuffledIcons, ...shuffledIcons];
    const finalIcons = shuffleArray(pairedIcons);

    items = finalIcons.map((Icon, index) =>
      React.createElement(Icon, { key: index })
    );
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
