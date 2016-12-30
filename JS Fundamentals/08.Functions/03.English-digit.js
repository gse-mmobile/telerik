// Write a method that returns the last digit of given integer as an English word. 
// Write a program that reads a number and prints the result of the method.

// On the first line you will receive a number

// Print the last digit of the number as an English word

function solve(args) {

    var num = args[0],
        arr = num.split(''),
        lastDigit = +arr[arr.length - 1];

    console.log(NumToWord(lastDigit));

    function NumToWord(num) {
        var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        return words[num];
    }
}

solve(['42']);
// two

solve(['45626234']);
// four