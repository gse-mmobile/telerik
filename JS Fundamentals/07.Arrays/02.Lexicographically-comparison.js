// Write a program that compares two char arrays lexicographically (letter by letter).

// On the first line you will receive the first char array as a string
// On the second line you will receive the second char array as a string

// Print < if the first array is lexicographically smaller
// Print > if the second array is lexicographically smaller
// Print = if the arrays are equal

function solve(args) {

    var arg1 = args[0].split(''),
        arg2 = args[1].split(''),
        len = arg1.length,
        result = '=';

     // console.log(arg1);
     // console.log(arg2);

    if (arg2.length < arg1.length) {
        len = arg2.length;
    }

    for (var i = 0; i < len; i++) {   
        if (arg1[i] != arg2[i]) {
            if (arg1[i].charCodeAt(0) < arg2[i].charCodeAt(0)) {
                result = '<';
                // console.log(result);
                return result;
            }

            if (arg1[i].charCodeAt(0) > arg2[i].charCodeAt(0)) {
                result = '>';
                // console.log(result);
                return result;
            }
        }  
    }
    // console.log(result);
    return result;
}

solve(['hello', 'halo']);
solve(['food', 'food']);
solve(['fooooa', 'foooooz']);
