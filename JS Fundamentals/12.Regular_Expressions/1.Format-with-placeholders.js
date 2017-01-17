// Write a function that formats a string. The function 
// should have placeholders, as shown in the example
// Add the function to the String.prototype

// The input array will look like that:
// [
//    '{ "name": "John", age: 13 }', // options as JSON
//    'My name is #{name} and I am #{age}-years-old' // template
// ]
// Hint: you can use JSON.parse method to convert the options to an object.

// Output the formatted string.

function solve(args) {

    var obj = JSON.parse(args[0]),
        str = args[1];
    
	String.prototype.format = function(obj) {
	    var result = this;
    	for (i in obj) {
        	result = result.replace(new RegExp('#{' + i + '}', 'g'), obj[i]);
    	}
        return result;
    };
	
    console.log(str.format(obj));
}

solve ([
    '{ "name": "John", "age": 13 }',
    'My name is #{name} and I am #{age}-years-old'
]);

solve ([
    '{ "name": "John" }',
    "Hello, there! Are you #{name}?"
]);