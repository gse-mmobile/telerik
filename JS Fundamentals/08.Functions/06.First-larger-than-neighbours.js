// Write a method that returns the index of the first element in array that 
// is larger than its neighbours, or -1, if there is no such element.

// On the first line you will receive the number N - the size of the array
// On the second line you will receive N numbers sepated by spaces - the array

// Print the index of the first element that is larger than its neighbours or -1 if none are

function solve(args) {

    var len = +args[0],        
        arr = args[1].split(' ');

    console.log(isBigger(arr));

    function isBigger(array) {
        for (var i = 1; i < len - 1; i++) {
            if ((+array[i] > +array[i - 1]) && (+array[i] > +array[i + 1])) {
                return i;
            }
        }
        return -1;
    }
}

solve([ '6', '-26 -25 -28 31 2 27' ]);
// 1

solve([ '6', '-26 -28 -28 1 2 27' ]);
// -1