// Write a function that finds the youngest person in a given array of people and
// prints his/hers full name. Each person has properties firstname, lastname and age.
// Example:
// var people = [
//    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
//    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
//    { firstname: 'John', lastname: 'Doe', age: 42 }
// ];

// The input will consist of an array containing 3 * N values
// N is the number of people
// Values represent firstname, lastname, age, ...

// The output should be consisted of one line
// The full name of the youngest person

function solve(args) {
    
    var len = args.length,
        array = [],
        person = '',
        people = getPeople(),
        position = getYoungest(people);
   
    console.log(people[position].firstname + " " + people[position].lastname);

    function getPeople() {
        for (var i = 0; i < len; i++ ) {
            if ( i % 3 === 0) {          
                person = new Object();
                person.firstname = args[i];
                person.lastname = args[i+1];
                person.age = +args[i+2];
                array.push(person);
            }
        }
        return array;
    }

    function getYoungest(object) {
        var min = 999,
            position;
        for (var i = 0; i < object.length; i++) {
            if (object[i].age < min) {
                min = object[i].age;
                position = i;
            }
        }
        return position;
    }
}

solve([ 'Gosho', 'Petrov', '32', 'Bay', 'Ivan', '81', 'John', 'Doe', '42' ]);
// Gosho Petrov

solve([ 'Penka', 'Hristova', '61', 'System', 'Failiure', '88', 'Bat', 'Man', '16', 'Malko', 'Kote', '72' ]);
// Bat Man