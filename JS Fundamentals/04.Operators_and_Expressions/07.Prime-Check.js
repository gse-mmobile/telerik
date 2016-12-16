function solve(str) {

    var N = +str[0];

    if (N < 2 || N > 99) {
        
        return false;

    } else {
        
        for(var i = 2; i <= N/2; i++) {

            if(N % i === 0) {
            
                return false;
            }
        }
    }

    return true;
}