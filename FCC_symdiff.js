
function sym(args) {
  var arrays = Array.prototype.slice.call(arguments);
  var result = [];

  arrays.forEach(function(sub, subIdx) {
    sub.forEach(function(elem) {
      if(result.indexOf(elem) === -1) {
        var count = 0;
        arrays.forEach(function(sub2) {
          if(sub2.indexOf(elem) !== -1) {
            count++;
          }
        });

        if(count % 2 === 1) {
          result.push(elem);
        }
      }
    })
  })

  return result.sort(function(a, b) { return a - b; });
}

//sym([1, 2, 3], [5, 2, 1, 4]); /* ? */
sym([1, 1, 2, 5], [2, 3, 5], [3, 4, 5]) /* ? */
//should return [1, 4, 5]
