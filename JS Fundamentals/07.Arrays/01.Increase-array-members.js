// Write a program that allocates array of N integers, 
// initializes each element by its index multiplied by 5 
// and the prints the obtained array on the console.

// On the only line you will receive the number N

// Print the obtained array on the console.
// Each number should be on a new line

function solve(args) {
    
    for (var i = 0; i < +args[0]; i++) { 
        console.log(i * 5);
    }
}

solve(['5']);