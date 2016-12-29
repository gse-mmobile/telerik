// Write a program that finds all prime numbers in the range [1 ... N]. 
// Use the Sieve of Eratosthenes algorithm. The program should print 
// the biggest prime number which is <= N.

// On the first line you will receive the number N

// Print the biggest prime number which is <= N

function solve(args) {  

    var arr = [],
        num = +args[0];
    
    for (var i = num; i >= 2; i--) {
        if (isPrime(i)) {
            // console.log(i);
            return i;
        }
    }

    function isPrime(num) {
        if (num < 2) {
            return false;
        }
            for (var i = 2; i <= num / 2; i++) {
                if ( num % i === 0) {
                    return false;
                } 
            }
        return true;
    }
}

solve(['13']);
solve(['126']);
solve(['26']);
