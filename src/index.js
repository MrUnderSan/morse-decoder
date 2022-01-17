const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let morseCodeArr = [];

  for (let i = 0; i < expr.length; i += 10) {
    let numberCodeStr = expr.slice(i, i + 10);

    let morseCodeStr = "";

    for (let x = 0; x < 10; x += 2) {
      if (numberCodeStr.slice(x, x + 2) == 10) {
        morseCodeStr = morseCodeStr + ".";
      } else if (numberCodeStr.slice(x, x + 2) == 11) {
        morseCodeStr = morseCodeStr + "-";
      }
    }

    morseCodeArr.push(morseCodeStr);
  }

  let decodeString = "";

  morseCodeArr.forEach((elem) => {
    if (elem == "") {
      decodeString += " ";
    } else {
      decodeString += MORSE_TABLE[elem];
    }
  });

  return decodeString;
}

module.exports = {
  decode
}
