var maxScoreWords = function (words, letters, score) {
  const comp = [];
  let res = 0;
  const scoreObject = {};
  const numOfLettersObject = {};
  const wordsLength = words.length;

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (!numOfLettersObject[letter]) {
      numOfLettersObject[letter] = 1;
      scoreObject[letter] = score[letter.charCodeAt(0) - 97];
    } else numOfLettersObject[letter] += 1;
  }

  for (let i = 0; i < wordsLength; i++) {
    helper(numOfLettersObject, i, 0);
  }

  return res;

  function helper(object, index, priorValue) {
    if (index === wordsLength) {
      res = Math.max(res, priorValue);
      return;
    }

    for (let i = index; i < wordsLength; i++) {
      const currentWord = words[i];
      const duplicated = { ...object };
      let total = 0;

      for (j = 0; j < currentWord.length; j++) {
        const currentString = currentWord[j];

        // 탈출하는 경우
        if (!duplicated[currentString]) break;
        if (duplicated[currentString] === 0) break;

        // 남아 있는 경우
        duplicated[currentString] -= 1;
        total += scoreObject[currentString];
      }

      if (j === currentWord.length) {
        res = Math.max(res, priorValue + total);
        helper(duplicated, i + 1, priorValue + total);
      }
    }
  }
};
