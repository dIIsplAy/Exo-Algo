var notUnique = ['a', 'a', 'a', 'aa', 'b', 'd', 'f', 'h', 'mm', 'n', 'o', 'b', 1, 2, 1, 2, 1, 'p', 'z', 'm', 'z'];



var Unique = [];

for (i = 0; i < notUnique.length; i++) {
    var isUnique = true;
    for (w = 0; w < Unique.length; w++) {
        if (notUnique[i] == Unique[w]) {
            isUnique = false;
        }



    }
    if (isUnique == true) {
        Unique.push(notUnique[i])

    }
    console.log(Unique);
}