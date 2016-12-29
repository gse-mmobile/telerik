function solve(args) {

    var l = args.length,
        min = 10101,
        max = -10101,
        sum = 0,
        avg = 0;
      
    for (var i=0; i < l; i++) {

        sum = sum + +args[i];

        avg = sum / l;

        if (+args[i] > max) {
            max = +args[i];
        }

        if (+args[i] < min) {
            min = +args[i];
        }
    }
    
    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}
