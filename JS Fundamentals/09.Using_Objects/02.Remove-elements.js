// Write a function that removes all elements with a given value. Attach 
// it to the array type. Read about prototype and how to attach methods.

// var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
// arr.remove(1); // arr = [2,4,3,4,111,3,2,'1'];

// You will be given an array of strings. Remove all occurrences 
// of the first element in the array in itself.

// The input will consist of an array of strings

// The output should be the array with some elements removed
// Each string should be on a separate line

function solve(args) {

    var target = args[0],
        arr = args.splice(1),
        len = arr.length,
        newArray = [];

    remElement(arr, target);

    printArray(newArray);

    function remElement(array, target) {
        for (var i = 0; i < len; i++) {
            if (target !== array[i]) {
                newArray.push(array[i]);
            }
        }
    }

    function printArray(array) {
        for (var i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
}

solve([ '1', '2', '3', '2', '1', '2', '3', '2', '1', '1' ]);
// 2
// 3
// 2
// 2
// 3
// 2

solve([ '_h/_', '^54F#', 'V', '^54F#', 'Z285', 'kv?tc`', '^54F#', '_h/_', 'Z285', '_h/_', 'kv?tc`', 'Z285', '^54F#', 'Z285', 'Z285', '_h/_', '^54F#', 'kv?tc`', 'kv?tc`', 'Z285' ]);
// ^54F#
// V
// ^54F#
// Z285
// kv?tc`
// ^54F#
// Z285
// kv?tc`
// Z285
// ^54F#
// Z285
// Z285
// ^54F#
// kv?tc`
// kv?tc`
// Z285