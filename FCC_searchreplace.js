function myReplace(str, before, after) {

    var regex = new RegExp(before.toLowerCase(), "g"); /* ? */
    str = str.replace(regex, after.toLowerCase()); /* ? */

    var before2 = before.charAt(0).toUpperCase() + before.substr(1);
    var after2 = after.charAt(0).toUpperCase() + after.substr(1);
    regex = new RegExp(before2, "g"); /* ? */
    str = str.replace(regex, after2); /* ? */

    return str;
}

//myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
