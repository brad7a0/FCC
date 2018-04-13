
function translatePigLatin(str) {
    // find letters before first vowel
    var match = str.match(/(.*?)[aeiou]+/); /* ? */
    var idx = match[1].length; /* ? */

    // remove from front and put at end + ay
    if(idx > 0) {
        str = str.substr(idx) + str.substr(0, idx) + 'ay'; /* ? */
    }
    else {
        str += 'way'; /* ? */
    }
    return str; /* ? */
}

translatePigLatin("algorithm"); /* ? */
