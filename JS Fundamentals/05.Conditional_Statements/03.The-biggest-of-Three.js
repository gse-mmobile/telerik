function solve(array) {

    var a = +array[0],
        b = +array[1],
        c = +array[2];

    if(a > b) {
        if (a > c) {
            console.log(a);
        } else if (a < c) {
            console.log(c);
        }
    } else if (b > c) {
        console.log(b);
        } else if (b < c) {
            console.log(c);
    } else {
    console.log(a);
    }
}