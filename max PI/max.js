var numbers = [1, 19, 28, 3, 37, 8, 371, 3, Math.PI, 3 * 3 * 3 * 3 * 4, 1002, 1 ^ 10, Math.exp(2), Math.log(2)]

var max = numbers[0];
console.log('plop');
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {

        max = numbers[i];
        console.log(max)

    }


}