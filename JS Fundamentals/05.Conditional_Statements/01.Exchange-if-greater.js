function solve(array) {

    var a = +array[0],
        b = +array[1];

    if(a > b) {
        console.log(b + ' ' + a);
    } else {
        console.log(a + ' ' + b);
    }
}

solve(['5', '2']);
solve(['3', '4']);
solve(['5.5', '4.5']);