
function smallestCommons(arr) {
  var start = Math.min(arr[0], arr[1]);
  var end = Math.max(arr[0], arr[1]);
  var multiples = {};
  var common = Infinity;

  // multi all numbers together... got the max to check to
  var max = 1;
  for(var i = start; i <= end; i++) {
    max *= i;
  }
  common = max;

  // multiply the largest number checking for the rest dividing evenly into it
  for (var i = 1; i < max / end; i++) {
    var multiple = end * i;

    // how many divide into it?
    var divisorCount = 0;
    for (var j = 0; j <= end - start && divisorCount === j; j++) {
      if(multiple % (j + start) === 0) {
        divisorCount++;
      }
    }

    if(divisorCount === end - start + 1) {
      common = multiple;
      return common;
    }
  }

  return common;
}

function assert(val, verifyVal) {
  if(val !== verifyVal) {
    throw new Error("Mismatch: " + val + " !== " + verifyVal);
  }
  else {
    console.log("Confirmed: " + val + " === " + verifyVal)
  }
}

assert(smallestCommons([1,5]), 60);
assert(smallestCommons([1,13]), 360360);
assert(smallestCommons([23,18]), 6056820);
