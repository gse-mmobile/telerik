// Write a JavaScript function that finds how many times a substring 
// is contained in a given text (perform case insensitive search).

// The input will consist of an array containing one string

// The output should be consisted of one line - the number of matches

function solve(args) {

    var substr = args[0].toLowerCase(),
        str = args[1].toLowerCase(),
        regex = new RegExp(substr, 'g'),
        count = (str.match(regex) || []).length;

    console.log(count);
}

solve([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);