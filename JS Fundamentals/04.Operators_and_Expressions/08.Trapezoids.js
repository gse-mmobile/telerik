function solve(array) {

    var a = +array[0],
        b = +array[1],
        h = +array[2],
        A = 0;

    A = ((a + b) * h) / 2;

    console.log(A.toFixed(7));
}

solve(['5', '7', '12']);
solve(['8.5', '4.3', '2.7']);
solve(['100', '200', '300']);
solve(['0.222', '0.333', '0.555']);