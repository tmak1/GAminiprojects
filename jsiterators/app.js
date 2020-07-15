// JavaScript Iterators


// PART A https://gist.github.com/epoch/a30881457cec9cd6bc262cd468bc97d2

// Q1
// countIntegers – counts how many integers there are in an array
// ex: countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]) // => 4

var countIntegers = numbers => {
    count = 0;
    numbers.forEach(num => {
        if (Number.isInteger(num)) {
            count++;
        }
    });
    return count;
}

console.log('Total nunmber of integers found: ' +  countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4.00]));

// Q2
// .map() oldie but goodie
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. 
// The function should return an array of numbers where each number is the length 
// of the corresponding string. use .map

// lengths(['my', 'cake', 'pudding']);
// [2,4,7]

var lengths = strings => strings.map(string => string.length);

console.log('Array of lengths');
console.log(lengths(['my', 'cake', 'pudding']));



// Q3
// .map()
// Write code using .map() to have the following input and output:

// getSquares – takes in an array of numbers and returns an array of their squares
// ex: getSquares([1, 2, 3, 4, 5]) => [1, 4, 9, 16, 25]


var getSquares = numbers => numbers.map(number => Math.pow(number, 2));

console.log('Squared array: ') 
console.log(getSquares([1, 2, 3, 4, 5]));



// Q4 
// (a)
// .filter() & .reduce()
// Write an expression using array iterator methods (like filter and reduce) to 
//compute the total value of the machines in the inventory array. Use arrow functions.
// var inventory = [
//   {type:   "machine", value: 5000},
//   {type:   "machine", value:  650},
//   {type:      "duck", value:   10},
//   {type: "furniture", value: 1200},
//   {type:   "machine", value:   77}
// ]
// (b)
// Get an array of all the machines with value over 500

var inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]

// (a)
var totalMachineValue = inventory => {
    return result = inventory
            .filter(item => item.type === 'machine')
            .map(machine => machine.value)
            .reduce((total, machineValue) => total + machineValue);
}

console.log('Total machine value: ' + totalMachineValue(inventory));

// (b)
var totalMachineValueAbove500 = inventory => {
    return result = inventory
            .filter(item => item.type === 'machine')
            .map(machine => machine.value)
            .filter(machineValue => machineValue > 500)
            .reduce((total, machineValueOver500) => total + machineValueOver500)
}

console.log('Total machine value over 500: ' + totalMachineValueAbove500(inventory));




// PART B https://gist.github.com/tmak1/492743b9bb45e84133e42e2af7ba0863

// var users = [
    //     { id: 1, username: "Apple", active: true,  age: 20 },
    //     { id: 2, username: "Banana", active: false, age: 35 },
    //     { id: 3, username: "Ear", active: false, age: 60 },
    //     { id: 4, username: "Dog", active: true,  age: 65 },
    //     { id: 5, username: "Cat", active: true,  age: 80 },
    //     { id: 6, username: "Ear", active: true,  age: 95 },
    //   ];

       
        
// Q1
//   write code to get an array of all users that have the username "Ear"
var users = [
    { id: 1, username: "Apple", active: true,  age: 20 },
    { id: 2, username: "Banana", active: false, age: 35 },
    { id: 3, username: "Ear", active: false, age: 60 },
    { id: 4, username: "Dog", active: true,  age: 65 },
    { id: 5, username: "Cat", active: true,  age: 80 },
    { id: 6, username: "Ear", active: true,  age: 95 },
];

var getUsersWithUsernameEar = users => users.filter(user => user.username === 'Ear');

console.log('Array of users with username Ear: ');
console.log(getUsersWithUsernameEar(users));
        



// Q2
//   write code to get an array of all users with an age of 60 or over

var getUsersWithAge60Plus = users => users.filter(user => user.age >= 60);

console.log('Array of users with age over 60: ');
console.log(getUsersWithAge60Plus(users));



// Q3 
//   write code to get an array of all ids in users

var getAllUserIds = users => users.map(user => user.id);

console.log('Array of all user ids: ');
console.log(getAllUserIds(users));



// Q4
//   write a function that calculate the average age of all users 

var getUserAverageAge = users => {
    (users
        .map(user => user.age)
        .reduce((totalAge, age) => totalAge + age)
    )/users.length;
}

console.log('Average user age: ' + getUserAverageAge(users));




// Q5
//   sort the users by username in ascending order

var sortUserByUserNameAsc = users => {
    users.sort((userA, userB) => {
        if(userA.username < userB.username) { 
            return -1; 
        }
        else if(userA.username > userB.username) { 
            return 1; 
        } else {
            return 0;
        }
    });
}

console.log('Users sorted bu username: ');
console.log(sortUserByUserNameAsc(users));


// Q6
var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "I see no X here", "I am a developer"
  ];

//   console log each word in words in uppercase excluding the first word

var upperCaseWordsExceptFirst = words => {
    return words
            .slice(1)
            .map(word => word.toUpperCase())
}

console.log('Array of words in uppercasse except first word: ');
console.log(upperCaseWordsExceptFirst(words));


// Q7
//   write code to count the number of words with more than 5 letters 

var wordsWithMoreThan5Letters = words => {
    return words
            .map(word => word.length > 5)
            .filter(word => word === true)
            .length
}


console.log('Number of words with more than 5 letters: '+ wordsWithMoreThan5Letters(words));


// Q8
// get an array of words with each word's first character capitalize (just the first character of each string)

var firstCharCapitalize = words => {
    return words.map(word => {
        return word
                .split(' ')
                .map(string => string[0].toUpperCase() + string.slice(1))
                .join(' ');  
    })
}


console.log('Capitalized array: ') 
console.log(firstCharCapitalize(words));




