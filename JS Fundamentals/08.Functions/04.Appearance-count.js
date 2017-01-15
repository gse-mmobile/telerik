// Write a method that counts how many times given number appears in a given array. 
// Write a test program to check if the method is working correctly.

// On the first line you will receive a number N - the size of the array
// On the second line you will receive N numbers separated by spaces - the numbers in the array
// On the third line you will receive a number X

// Print how many times the number X appears in the array

function solve(args) {

    var len = +args[0],        
        num = +args[2],
        arr = args[1].split(' '),
        counter = 0;

    console.log(count(num));

    function count(n) {
        counter = 0;
        for (var i = 0; i < len; i++) {
            if (+arr[i] === num ) {
                counter++;
            }
        }
        return counter;
    }
}

solve(['8', '28 6 21 6 -7856 73 73 -56', '73']);
// 2

solve(['10', '2 28 6 21 6 -7856 73 73 -56 193', '193']);
// 1