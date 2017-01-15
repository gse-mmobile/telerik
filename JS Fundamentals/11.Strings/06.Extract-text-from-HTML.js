// Write a function that extracts the content of a html page given as text. 
// The function should return anything that is in a tag, without the tags.

// The input will consist of an array of strings

// The output should be consisted of one line - text inside tags

function solve(args) {
  
    var regex = /(<([^>]+)>)/ig,
        str = '',
        arr = [];

    for (i in args) {
        str = args[i].replace(regex, '').trim();
        arr.push(str);
    }

    console.log(arr.join(''));
}

solve([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]);

// Sample sitetextmore textand more...in body
