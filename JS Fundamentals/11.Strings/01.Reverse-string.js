// Write a JavaScript function that reverses a string.

// The input will consist of an array containing one string

// The output should be consisted of one line - the reversed string

function solve(args) {
    
    var arr = args[0].split('');
    arr = arr.reverse();
  	console.log(arr.join(''));
}

solve('sample');
// elpmas

solve('qwertytrewq');
// qwertytrewq