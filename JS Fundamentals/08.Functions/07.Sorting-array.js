// Write a method that returns the maximal element in a portion of array of integers 
// starting at given index. Using it write another method that sorts an array in 
// ascending / descending order. Write a program that sorts a given array.

// On the first line you will receive the number N - the size of the array
// On the second line you will receive N numbers separated by spaces - the array

// Print the sorted array
// Elements must be separated by spaces

function solve(args) {

     var len = +args[0],        
         arr = args[1].split(' '),
         sorted = sort(arr).join(' ');
    
    console.log(sorted);

    function sort(array) {        
        array.sort(function(a, b) { return a - b; });
        return array;
    } 
}

solve([ '6', '3 4 1 5 2 6' ]);
// 1 2 3 4 5 6

solve([ '10', '36 10 1 34 28 38 31 27 30 20' ]);
// 1 10 20 27 28 30 31 34 36 38