function solve(array) {

    var str = array[0];
    var n = str.length;
    
    if(n < 3) {
        console.log('false 0');
    } else {         
        if(str[n - 3] == 7) {
            console.log('true');
        } else {
            console.log('false ' + str[n - 3]);
        }
    } 
}