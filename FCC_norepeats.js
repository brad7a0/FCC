
function permAlone(str) {
  var goodPerms = [];

  var letters = str.split('');

  // TODO: create permutations and test if it hasRepeats, if false, add to goodPerms

  return goodPerms;
}

function hasRepeats(str) {
  var rx = /(.)\1{1,}/gi;
  return str.match(rx) !== null;

}

//permAlone('aab');
hasRepeats('aaaaa'); /* ? */
