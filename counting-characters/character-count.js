function countingLetters(str) {
  newStr = str.replace(" ", "").toLowerCase();
  strArr = newStr.split("");
  var uniqueStr = {};
  for (var i = 0; i < strArr.length; i++) {
    if (uniqueStr[strArr[i]] == undefined) {
      uniqueStr[strArr[i]] = 1;
    } else {
      uniqueStr[strArr[i]] += 1;
    }
  }
  return uniqueStr;
}
console.log(countingLetters("Hello World"))

