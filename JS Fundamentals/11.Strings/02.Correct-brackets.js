// Write a JavaScript function to check if in a given expression the brackets are put correctly.

// The input will consist of an array containing a string

// The output should be consisted of one line
// Correct or Incorrect

function solve(args) {

    var array = args[0].split('');

    brackets(array);

    function brackets(arr) {
        var left = 0,
            right = 0,
            newArray = [];

        for (i in arr) {
            if (arr[i] === '(') {
                left++;
                newArray.push(arr[i]);
            }
            if (arr[i] === ')') {
                right++;
                newArray.push(arr[i]);
            }
        }

        if (left === right) {
            if ( newArray[0] != ')' && newArray[newArray.length - 1] != '(') {
                console.log('Correct');
            } 
        } else {
            console.log('Incorrect');
        }
    }
}

solve('((a+b)/5-d)');
// Correct

solve(')(a+b))');
//Incorrect