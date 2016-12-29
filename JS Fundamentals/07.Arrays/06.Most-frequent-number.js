// Write a program that finds the most frequent number in an array of N elements.

// On the first line you will receive the number N
// On the next N lines the numbers of the array will be given

// Print the most frequent number and how many time it is repeated
// Output should be REPEATING_NUMBER (REPEATED_TIMES times)


function solve(args) {
   
    var arr = args.splice(1),
        len = args[0],
        sorted = arr.sort(function(a, b) { return a - b; }),
   		current = 1,
    	longest = 1,
    	mostFreq = sorted[0];

    for (var i = 0; i < len - 1; i++) {
        if (sorted[i] == sorted[i + 1]) {
            current++;
            if (longest <= current) {
                longest = current;
                mostFreq = sorted[i];
            }
        }
        else {
            current = 1;
        }
    }

    console.log(mostFreq + " (" + longest + " times)");
}

solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
