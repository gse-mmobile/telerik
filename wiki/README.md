След седмици лутане из условията и неправилното разбиране на input-a на определени домашни по JavaScript Основи, достигнах до следния начин по който лично аз започвам решаването на всяка задача, чиято съдба е да донесе 100 от 100 точки в BGCoder. Задачата, която ще използвам за пример е шестата от домашното по функции (problem 6. First larger than neighbours).

Първата стъпка е само функция, която предавам (submit) в BGCoder за да хвана input-a на нулевите тестове и да си ги пренеса локално. Това ще бъдат и първите три реда на demo.js файла:

```
function solve(args) { 
    console.log(args) 
}
```

<scr1>
![Alt text](./scr1.png?raw=true "Optional Title")

Изпращаме в BGCoder и получаваме 0 / 100, но избираме Details за да видим реално input-a.

<scr2>


<scr3>

В табличката "Your output" получаваме input-a на нулевия тест и можем спокойно да си го копираме и поставим в демо файла за да го имаме локално:

```
function solve(args) { 
    console.log(args) 
}

solve([ '6', '-26 -25 -28 31 2 27' ]);
```

По този начин вече може да си тестваме задачката локално. Също така структурата е същата, която ще бъда предадена в BGCoder след като сме готови (без solve функцията накрая, тя служи само за тестове). Вече мога да тествам с node.js:

```
$ node demo.js 
[ '6', '-26 -25 -28 31 2 27' ]
```

Резултатът е като в BGCoder, тоест input-a е пренесен правилно. Сега остава да го прихванем правилно и да проверим дали е така. Условието на задачата е следното:

```
Write a method that returns the index of the first element in array that is larger than its neighbours, or -1, if there is no such element.

Input
On the first line you will receive the number N - the size of the array
On the second line you will receive N numbers sepated by spaces - the array

Output
Print the index of the first element that is larger than its neighbours or -1 if none are
```

Следователно първото число трябва да бъде дължината на масива, а самият масив - всичко останало без първото число (в условието зададени като редове, предполагам от подобни задачи в C# и различен input). В demo.js структурата остава същата, декларираме две променливи във функцията и използваме console.log за да проверим дали правилно сме ги указали:

```
function solve(args) { 

    var len = +args[0],        
        arr = args[1].split(' ');

    console.log(len);
    console.log(arr); 
}

solve([ '6', '-26 -25 -28 31 2 27' ]);
```

Резултатът е какъвто очакваме, на първия ред се изписва дължината, a на втория вече имаме масив с всичките числа за проверяване:
```
$ node demo.js 
6
[ '-26', '-25', '-28', '31', '2', '27' ]
```

Сега само липсва метод ifBigger, който да свърши работата. Вече използваме console.log само за да върнем крайния резултат:
```
function solve(args) {

    var len = +args[0],        
        arr = args[1].split(' ');

    console.log(isBigger(arr));

    function isBigger(array) {
        for (var i = 1; i < len - 1; i++) {
            if ((+array[i] > +array[i - 1]) && (+array[i] > +array[i + 1])) {
                return i;
            }
        }
        return -1;
    }
}

solve([ '6', '-26 -25 -28 31 2 27' ]);
```

Тествамe:
```
$ node demo.js 
1
```

Резултатът е очакван, копирамe само функцията (без solve([....]);) и изпращамe в BGCoder.

<scr4>

100/100

<scr5>

