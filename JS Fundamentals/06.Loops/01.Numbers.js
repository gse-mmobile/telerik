function solve(array) {
    
    var number = +array[0],
        arr = [];

    for (var i=1; i<=number; i++) {
        arr.push(i);
    }

    console.log(arr.join(' '));
}
