function pairwise(arr, arg) {

  var pairs = [];

  arr.reduce(function findPairs(pairs, current, idx, array) {
    for (var i = idx + 1; i < array.length; i++)
    {
      if (current + array[i] === arg) {
        var foundMatch = false;
        pairs.forEach(function lookForMatches(pair) {
          if(pair[0] === idx || pair[0] === i || pair[1] === idx || pair[1] === i) {
            foundMatch = true;
          }
        });

        if(!foundMatch) {
          pairs.push([idx, i]);
        }
      }
    }

    return pairs;
  }, pairs);

  var sum = 0;
  pairs.forEach(function addIndicies(pair) {
    sum += pair[0] + pair[1];
  });

  return sum;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
console.log(pairwise([1, 1, 1], 2));
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
