
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var result = [];

  arr.forEach(function(el) {
    if(Array.isArray(el)) {
      result = result.concat(steamrollArray(el));
    }
    else {
      result.push(el);
    }
  });

  return result;
}

function assert(val, verifyVal) {
  var compare = (''+ val !== '' + verifyVal);
  if(compare) {
    throw new Error("Mismatch: " + val + " !== " + verifyVal);
  }
  else {
    console.log("Confirmed: " + val + " === " + verifyVal)
  }
}

assert(
  steamrollArray([1, {}, [3, [[4]]]]),
  [1, {}, 3, 4]
);

assert(
  steamrollArray([1, [2], [3, [[4]]]]),
  [1, 2, 3, 4]
);

assert(
  steamrollArray([1, [], [3, [[4]]]]),
  [1, 3, 4]
);

assert(
  steamrollArray([[["a"]], [["b"]]]),
  ["a", "b"]
);

