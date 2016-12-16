function solve(array) {

    var x = +array[0],
        y = +array[1],
        r = 2;

    var c = Math.sqrt(x*x + y*y);


    if( x*x + y*y < r*r ) {

        console.log('yes ' + c.toFixed(2));

    } else {

        console.log('no ' + c.toFixed(2));
    }
}

solve(['100', '-30']);