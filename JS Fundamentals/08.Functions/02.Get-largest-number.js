// Write a method GetMax() with two parameters that returns the larger
// of two integers. Write a program that reads 3 integers from the 
// console and prints the largest of them using the method GetMax().

// On the first line you will receive 3 integers separated by spaces

// Print the largest of them

function solve(args) {

    var arr = args[0].split(' '),
        arg1 = +arr[0],
        arg2 = +arr[1],
        arg3 = +arr[2],
        step1 = GetMax(arg1, arg2),
        step2 = GetMax(arg2, arg3);

    console.log(GetMax(step1, step2));
     
    function GetMax(x, y) {
        if (x > y) {
            return x;
        } else {
            return y;
        }
    }
}

solve(['8 3 6']);
// 8

solve(['7 19 19']);
// 19