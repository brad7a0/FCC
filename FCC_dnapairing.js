var pairs = {
  'A': 'T',
  'T': 'A',
  'C': 'G',
  'G': 'C'
};

function pairElement(str) {
  var result = [];

  str.split('').forEach(function (char) {
    result.push([char, pairs[char]]);
  })

  return result;
}

pairElement("GCG");
/* ? */
// should return [["G", "C"], ["C","G"],["G", "C"]]
pairElement("ATCGA"); /* ? */
// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

pairElement("TTGAG");
/* ? */
// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

pairElement("CTCTA");
/* ? */
// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].