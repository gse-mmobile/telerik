// Write a program that finds the length of the maximal 
// increasing sequence in an array of N integers.

// On the first line you will receive the number N
// On the next N lines the numbers of the array will be given

// Print the length of the maximal increasing sequence


function solve(args) {

    var arr = args.splice(1),
        len = args[0],
        count = [+arr[0]],
        temp = [+arr[0]];

        for (var i = 0; i < arr.length; i++) {

            if (+arr[i] > +arr[i - 1]) {
                temp.push(+arr[i]);
            } else {
                temp = [+arr[i]];
            }

            if (temp.length > count.length) {
                count = temp;
            }
        }

    console.log(count.length);
}

solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);
