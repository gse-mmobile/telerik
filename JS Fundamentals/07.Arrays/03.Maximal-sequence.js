// Write a program that finds the length of the maximal sequence of 
// equal elements in an array of N integers.

// On the first line you will receive the number N
// On the next N lines the numbers of the array will be given

// Print the length of the maximal sequence

function solve(args) {

    var arr = args.splice(1),
        prev = +arr[0],
        count = 1,
        array = [];

    for (var i = 1; i < arr.length; i++) {
 
        if(+arr[i] === prev) {
            count++;
            array.push(count);
            // console.log(+arr[i] + " = " + prev);
        } else {
            count = 1;
            // console.log(+arr[i] + " != " + prev);
        }
        prev = +arr[i];
    }
    // console.log("count = " + count);
    // console.log("sequence = " + array);
    console.log(Math.max(...array));
}

solve(['4', '2', '1', '2', '4']);
solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);
