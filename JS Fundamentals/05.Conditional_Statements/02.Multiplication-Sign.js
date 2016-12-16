function solve(array) {

    var a = +array[0],
        b = +array[1],
        c = +array[2],
        countNegative = 0;
    
    if(a < 0) { countNegative++ }
    if(b < 0) { countNegative++ }
    if(c < 0) { countNegative++ }

    if(a === 0 || b === 0 || c ===0) { 
        console.log('0'); 
    } else if(countNegative == 1 || countNegative == 3) {
            console.log('-');
    } else {
        console.log('+');
    }
}

solve(['-5', '0', '1']);