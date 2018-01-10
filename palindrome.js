let send = document.getElementById('send');
//let word = document.querySelector('word');

send.addEventListener('submit', start)



function start(e) {
    e.preventDefault();

    let result = document.querySelector('#result');
    let word = send['word'].value;
    word = word.split('');



    for (i = 0, l = word.length; i < l / 2; i++) {
        if (word[i] !== word[l - 1 - i]) {
            result.innerText = ('Wesh c un paladrome? : Non frere');
            return false;
        }

    }
    result.innerText = ('Wesh c un paladrome? : Dis wallah');
    return true;
}