function solve(array) {

    var number = +array[0],
    result;

    if (number >= 0 && number < 20) {
        result = Digit(number);
    }

    if (number > 19 && number < 100) {
        result = Tens(parseInt(number / 10));
        
        if(number % 10 != 0) {
            result = result + " " + Digit(number % 10);
        }
    }
    
    if (number >= 100 && number < 1000) {
        result = Digit(parseInt(number / 100)) + " hundred";
        
        if (number % 100 != 0) {
            var tens2 = number%100;
            
            if(tens2 % 10 == 0) {
                result = result + " and " + Tens(parseInt(number / 10) % 10);
            } else {
                if(tens2<20) {
                    result = result + " and "  + Digit(number % 100);
                } else {
                    result = result + " and " + Tens(parseInt(number/10)%10) +" "+ Digit(tens2%10);
                }                
            }              
        }
    }
    function Digit(num) {
        var digits = new Array("zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen");
        return digits[num];
    }

    function Tens(num) {
        var tens = "";
        switch (num) {
            case 1:
                tens = "ten";
                break;
            case 2:
                tens = "twenty";
                break;
            case 3:
                tens = "thirty";
                break;
            case 4:
                tens = "fourty";
                break;
            case 5:
                tens = "fifty";
                break;
            case 6:
                tens = "sixty";
                break;
            case 7:
                tens = "seventy";
                break;
            case 8:
                tens = "eighty";
                break;
            case 9:
                tens = "ninety";
                break;
        }
        return tens;
    }

    function titleCase(str) {
        var arr = str.toLowerCase().split(' ');
        arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].substring(1);
        return arr.join(' ');
    }

    console.log(titleCase(result));
}