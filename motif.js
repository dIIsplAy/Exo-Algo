var string = ["l", "a", "l", "o", "p", "a", "l", "l", "a", "l", "a", "l", "i"];

var na = "lala";
na = na.split('');

function Motif(s, n) {
    for (var i = 0; i < s.length; i++) {
        //console.log('---------');
        if (s[i] == n[0]) {
            var isEqual = true;
            //console.log('maybe')
            for (var j = 0; j < n.length; j++) {
                //console.log('s[i]', s[i]);
                //console.log('n[j]', n[j]);

                if (s[i + j] !== n[j]) {
                    isEqual = false;
                    //console.log('s[i + j]', s[i + j]);
                }

                if (isEqual && j == n.length - 1) {
                    //console.log('last ', isEqual);
                    return i;
                }

            }

        }
        //else {
        //    console.log("not found");
        //}
    }

    return -1;
}
console.log(Motif(string, na));