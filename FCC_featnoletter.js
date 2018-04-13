
function fearNotLetter(str) {
  var result = undefined;
  var letters = str.split('');
  var start = letters[0];
  var end = letters[letters.length - 1];

  for(var c = start.charCodeAt(0); c < end.charCodeAt(0); c++) {
    let letter = String.fromCharCode(c);
    if(str.indexOf(letter) === -1) {
      result = letter;
    }
  }

  return result;
}

fearNotLetter("abce"); /* ? */
// should return "d".

fearNotLetter("abcdefghjklmno"); /* ? */
//  should return "i".

fearNotLetter("bcd"); /* ? */
//  should return undefined.

fearNotLetter("yz"); /* ? */
//  should return undefined.