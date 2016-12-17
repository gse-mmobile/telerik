function solve(array) {

    var a = +array[0],
        b = +array[1],
        c = +array[2];
    
    if (a > b) {
        if (a > c) {
            if (b > c) {
                console.log(a + ' ' + b + ' ' + c);
            } else {
                console.log(a + ' ' + c + ' ' + b);
            }
        } else { // a > b && a < c
            console.log(c + ' ' + a + ' ' + b);
        }
    } else {
        if (b > c) {
            if (a > c) {
                console.log(b + ' ' + a + ' ' + c);
            } else {
                console.log(b + ' ' + c + ' ' + a);
            }
        } else { // b > a && b < c
            console.log(c + ' ' + b + ' ' + a);
        }
    }

}

solve(['151', '1223', '1221']);