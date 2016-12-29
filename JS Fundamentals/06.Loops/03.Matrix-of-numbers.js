function solve(args) {
    
    var number = +args[0];
       

    for (var i = 1; i <= number; i++) {

        var result = '';
        for (var j = 1; j <= number; j++) {
            result = result + ' ' + ((i + j) -1);
        }

        console.log(result);
    }
}
