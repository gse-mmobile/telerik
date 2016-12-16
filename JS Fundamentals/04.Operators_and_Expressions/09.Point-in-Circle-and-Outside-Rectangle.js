function solve(array) {

    var x = +array[0],
        y = +array[1],
        insideCircle = ((x-1)*(x-1) + (y-1)*(y-1) <= 2.25),
        insideRectangle = ((x >= -1 && x <= 5) && (y >= -1 && y <= 1));

    if (insideCircle) {
        if (insideRectangle) {
            console.log('inside circle inside rectangle');
        } else {
            console.log('inside circle outside rectangle');
        }
    } else {
        if (insideRectangle) {
            console.log('outside circle inside rectangle');
        } else {
            console.log('outside circle outside rectangle');
        }
    }
}

solve(['2.5', '2']);
solve(['0', '1']);
solve(['4.5', '0.5']);
solve(['1', '2']);