// Write a program that finds the index of given element X in a 
// sorted array of N integers by using the Binary search algorithm.

// On the first line you will receive the number N
// On the next N lines the numbers of the array will be given
// On the last line you will receive the number X

// Print the index where X is in the array
// If there is more than one occurence print the first one
// If there are no occurences print -1

function solve(args) {

    var length = args.splice(0, 1),
        array = args.splice(0, length),
        x = args,
  		min = 0,
        max = length - 1,
        result = -1,
        mid;

    while (min <= max) {
        mid = min + (max - min) / 2;
        mid = Math.floor(mid);

      	if (+array[mid] > x) {
            max = mid - 1;
        } else if (+array[mid] < x) {
            min = mid + 1;
        } else {
            result = mid;
            break;
        }
    }

	console.log(result);
}

solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);