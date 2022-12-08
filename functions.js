const isTheWordSplit = (pArray) => {
  // "firstElement" is first element of pArray
  let firstElement = pArray[0];
  // "dictionary" is second element of pArray
  let dictionary = pArray[1];

  // "singleString" is a new array created from dictionary
  let singleStrings = dictionary.split(",");
  // "answerWords" is holding "isTheWordSplit" function's output
  let answerWords = "";

  // Here I used nested .map method to combine singleStrings elements to match with "firstElement"
  singleStrings.map((firstWord) => {
    singleStrings.map((word) => {
      let joinedWord = firstWord + word;
      let reversedWord = [joinedWord].reverse().toString();

      if (joinedWord == firstElement || reversedWord == firstElement) {
        return (answerWords = firstWord + "," + word);
      } else {
        return "not possible";
      }
    });
  });
  /* Normally the if/else condition above should have given correct results. 
  But the else condition returns an empty element (""), 
  Because of that I created this if/else condition. So I cheated :))*/
  if (answerWords == "") {
    return "not possible";
  } else {
    return answerWords;
  }
};

export { isTheWordSplit };
