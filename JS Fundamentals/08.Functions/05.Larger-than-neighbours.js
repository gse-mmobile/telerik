// Write a method that checks if the element at given position in given array of integers 
// is larger than its two neighbours (when such exist). Write program that reads an array 
// of numbers and prints how many of them are larger than their neighbours.

// On the first line you will receive the number N - the size of the array
// On the second line you will receive N numbers separated by spaces - the array

// Print how many numbers in the array are larger than their neighbours

function solve(args) {

    var len = +args[0],        
        arr = args[1].split(' ');

    console.log(isBigger(arr));

    function isBigger(array) {
        var counter = 0;
        for (var i = 1; i < len - 1; i++) {
            if ((+array[i] > +array[i - 1]) && (+array[i] > +array[i + 1])) {
                counter++;
            }
        }
        return counter;
    }
}

solve([ '6', '-26 -25 -28 31 2 27' ]);
// 2

solve([ '10', '23 12 33 -26 -25 -28 31 2 12 -4' ]);
// 4