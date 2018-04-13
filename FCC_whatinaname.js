function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    arr = collection.filter(function(elem) {
        var skip = false;
        Object.keys(source).forEach(function(key) {
            if(elem[key] !== source[key]) {
                skip = true;
            }
        })
        return !skip;
    });
    // Only change code above this line
    return arr; /* ? */
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].