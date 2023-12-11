export const Unicode = {
  detectAlphabet: (word: string): "syr" | "ara" | "latin" => {
    if (word.split("").find((letter) => isSyriacCharacter(letter))) {
      return "syr";
    } else if (word.split("").find((letter) => isArabicCharacter(letter))) {
      return "ara";
    }

    return "latin";
  },
};

function isArabicCharacter(char: string) {
  const code = char.charCodeAt(0);
  return code >= 1536 && code <= 1791;
}

function isSyriacCharacter(char: string) {
  const code = char.charCodeAt(0);
  return code >= 1792 && code <= 1871;
}
