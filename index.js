class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    const regex = /[^A-Za-z0-9-' ']/g;
    const newStr = string.replace(regex, "");
    return newStr;
  }
  static titleize(string) {
    let exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let array = string.split(" ");
    let newArray = array.map((word) => {
      if (!exceptions.includes(word)) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });

    let firstWord = newArray[0].split("");
    console.log(firstWord);
    firstWord[0] = firstWord[0].toUpperCase();
    firstWord = firstWord.join("");
    // newArray.unshift(firstWord);
    // newArray.splice(1, 1);
    newArray[0] = firstWord;

    return newArray.join(" ");
  }
}

console.log(Formatter.titleize("from firstWord Giggles"));
