// Sorting an array means to arrange its elements in increasing 
// order. Write a program to sort an array. Use the Selection 
// sort algorithm: Find the smallest element, move it at the 
// first position, find the smallest from the rest, move it at 
// the second position, etc.

// On the first line you will receive the number N
// On the next N lines the numbers of the array will be given

// Print the sorted array
// Each number should be on a new line

function solve(args) {

    var min,
        minPos = '',
        len = args[0],
        array = args.splice(1),
        newArray = [];

    for (var j = 0; j < len; j++) {
        
        min = 9999;

        for (var i = 0; i < len; i++) {
            if (+array[i] < min) {
                min = +array[i];
                minPos = i;
            }
        } 
        newArray.push(array.splice(minPos, 1));
    }

    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] != newArray[i-1]) {
            console.log(newArray[i]);
        } 
    }
}

solve(['6', '3', '4', '1', '5', '2', '6']);
solve(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']);
