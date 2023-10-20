const reverseWordsInSentence = (sentence) => {
  const words = sentence.split(" ");

  const reverse = words.map((word) => {
    return word.split("").reverse().join("");
  });

  const revSent = reverse.join(" ");

  return revSent;
};

const inputSentence = "reverse me please"; // try -  "This is a sunny day"
const revSent = reverseWordsInSentence(inputSentence);

console.log(revSent);


// output  -  esrever em esaelp