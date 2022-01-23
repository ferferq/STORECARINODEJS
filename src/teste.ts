function execute(input: string): string {
  const inputConvert = input.toLocaleLowerCase().split("");
  let beforeLetter = "";
  const contSequenceLetter: string[] = [];
  let iQuantifySameLetter = 0;

  inputConvert.forEach((letter) => {
    const iPositionLetterNow = contSequenceLetter.length - 1;
    iQuantifySameLetter += 1;

    if (beforeLetter === "") {
      beforeLetter = letter;
      return;
    }

    if (beforeLetter !== letter) {
      iQuantifySameLetter = 1;
      contSequenceLetter.push(`${iQuantifySameLetter}${letter}`);
    } else {
      contSequenceLetter[
        iPositionLetterNow < 0 ? 0 : iPositionLetterNow
      ] = `${iQuantifySameLetter}${letter}`;
    }

    beforeLetter = letter;
  });

  const outputWord = contSequenceLetter.join("");
  return outputWord;
}

export { execute };
