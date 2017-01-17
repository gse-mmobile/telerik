// Write a function that puts the value of an object into the content/attributes of HTML tags.
// Add the function to the String.prototype and use it in the following way:
// var html = '<div data-bind-content="name"></div>';
// var data = { name: 'Pesho' };
// var result = html.bind(data);

// The input array will look like this:
// [
//    '{ name: "Steven" }',
//    '<div data-bind-content="name"></div>'
// ]

// Output the html code with the bind values.

function solve(args) {
    var obj = JSON.parse(args[0]),
        str = '' + args[1],
        regex = /data-bind-(.*?)="(.*?)"/gi,
        current;

    str = str.replace(/'/, '"');
    
    while (current = regex.exec(str)) {
        var index = str.indexOf('>');
        if (str[index - 1] === '/') {
            index--;
        }
        var field = current[1];
        if (field.toLowerCase() === 'content') {
            var arr = str.split('');
            var x = arr.splice(index + 1, 0, obj[current[2]]);
            str = arr.join('');
        } else {
            var arr2 = str.split('');
            var x2 = arr2.splice(index, 0, " " + field + '="' + obj[current[2]] + '"');
            str = arr2.join('');
        }
    }
 
    console.log(str);
}

solve([
    '{ "name": "Steven" }',
    '<div data-bind-content="name"></div>'
]);
// <div data-bind-content="name">Steven</div>

solve([
    '{ "name": "Elena", "link": "http://telerikacademy.com" }',
    '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
]);
// <a data-bind-content="name" data-bind-href="link" data-bind-class="name" href="http://telerikacademy.com" class="Elena">Elena</а>