
function uniteUnique(arr) {
  var arrays = Array.prototype.slice.call(arguments);
  var result = [];

  result = arrays.reduce(function(acc, cur) {

    // filter duplicates out of current sub array
    cur = cur.filter(function(num) {
      return acc.indexOf(num) === -1;
    });

    // return concatinated array
    return acc.concat(cur /* ? */);
  }, result);

  return result; /* ? */
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
