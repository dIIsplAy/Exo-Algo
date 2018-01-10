// var words = ["Le", "chien", "marche", "vers", "sa", "niche", "et", "trouve", "une", "limace", "de", "chine", "nue", "pleine", "de", "malice", "qui", "lui", "fait", "du", "charme"]

// var anagrams = {};

// for (var i in words) {
//     var word = words[i];
//     word = word.split();


//     var sorted = word.sort();

//     if (anagrams[sorted] != null) {
//         anagrams[sorted].push(word)
//     } else {
//         anagrams[sorted] = [word];
//     }
// }

// for (var sorted in anagrams) {
//     var words = anagrams[sorted];
//     var sep = ",";
//     var out = "";
//     for (var n in words) {
//         out += sep + words[n];
//         sep = "";
//     }
//     document.writeln(sorted + ":" + out + "<br />");
// }
var words = ["Le", "chien", "marche", "vers", "sa", "niche", "et", "trouve", "une", "limace", "de", "chine", "nue", "pleine", "de", "malice", "qui", "lui", "fait", "du", "charme"],
    map = {};

//Normalize all the words 
var normalizedWords = words.map(function(word) {
    return word.split('').sort().join('');
});

//Create a map: normalizedWord -> real word(s)
normalizedWords.forEach(function(normalizedWord, index) {
    map[normalizedWord] = map[normalizedWord] || [];
    map[normalizedWord].push(words[index]);
});

//All entries in the map with an array with size > 1 are anagrams
Object.keys(map).forEach(function(normalizedWord, index) {
    var combinations = map[normalizedWord];
    if (combinations.length > 1) {
        document.writeln(index + ". " + combinations.join(' '));
    }
});