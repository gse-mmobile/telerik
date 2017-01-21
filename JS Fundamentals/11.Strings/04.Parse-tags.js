// You are given a text. Write a function that changes the text in all regions:

// <upcase>text</upcase> to uppercase.
// <lowcase>text</lowcase> to lowercase
// <orgcase>text</orgcase> does not change casing
// Note: Regions can be nested.

// The input will consist of an array containing one string

// The output should be consisted of one line

function solve(args){
  
    var arr=args[0].split(/[<|>]/g),
        filter = ['orgcase'];

    for (i in arr) {
        if (arr[i] === 'lowcase') {
            filter.push('lowcase');
        }
        else if (arr[i] === 'upcase') {
            filter.push('upcase');
        }
         else if (arr[i] === 'orgcase') {
            filter.push('orgcase');
        }
        else if (arr[i][0] === '/') {
            filter.pop();
        } else {
            if (filter[filter.length - 1] === 'lowcase') {
                arr[i] = arr[i].toLowerCase();
            }
            if (filter[filter.length - 1] === 'upcase') {
                arr[i] = arr[i].toUpperCase();
            }
        }
    }
  
    var str = arr.join('').replace(/[/]/g,'').replace(/(orgcase|upcase|lowcase)/g,'');

    console.log(str);
}

solve(["We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN't</orgcase> have <lowcase>anything</lowcase> else."]);
// We are liViNg in a YELLOW SUBMARINE. We doN't have anything else.