// Write a function that replaces non breaking white-spaces in a text with &nbsp.

// The input will consist of an array containing one string

// The output should be consisted of one line

function solve(args) {
    
    var str = args[0];
    
    str = str.replace(/ /g, '&nbsp;');
    console.log(str);
}

solve(['hello world']);
// hello&nbsp;world

solve(['This text contains 4 spaces!']);
// This&nbsp;text&nbsp;contains&nbsp;4&nbsp;spaces!!