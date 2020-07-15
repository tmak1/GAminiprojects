// https://gist.github.com/epoch/a376404403f65c1a19ded7ba69ca9d1a

// line of code
// Write a node.js command line application to count the number lines of code within a file.

// example usage in the terminal:

// $ node loc.js test1.js
// code: 4
// comment: 2
// blank: 1
// -----------
// total: 7
// The above example reads the test1.js file and output the line of code summary in the terminal.

// another example:

// $ node loc.js test2.js

// code: 1
// comment: 2
// blank: 1
// -----------
// total: 4
// extension for the smarty pants
// JS actually have 2 syntax for comments, the double slash // & the slash star /*. Does you program counts multi line comments properly?

/* 
   multi
   line
   comment
*/
//  test1.js
// console.log('test')

//  this is a test
//  testing again
// function hello() {
//   console.log('hi')
// }
//  test2.js
//  123 
//  testing again
     
// console.log('hey')


const fs = require('fs');

let blanks = [];
let comms = [];
let codes = [];
let input = process.argv[2];

var fileRead = input => {
    let file = fs.readFileSync(input); 
    let lines = file.toString().split('\n');
    lines = lines.map(line => line.trim());
    return lines;
}

var getMultiLineComments = lines => {
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('/*')) {
            if ((lines[i].charAt(0) !== '/')  || 
                ((lines[i].charAt(0) === '/') && (lines[i].charAt(1) !== '*'))) {
               codes.push(lines[i]);
            }
            for (let j = i; j < lines.length; j++) {
                comms.push(lines[j]);
                if (lines[j].includes('*/')) {
                    if ((lines[j].charAt(lines[j].length - 1) !== '/')  || 
                        ((lines[j].charAt(lines[j].length - 1) === '/') && (lines[j].charAt(lines[j].length - 2) !== '*'))) {
                        codes.push(lines[j]);
                    }
                    break; 
                }
            }
        }
    }
}

var distribute = lines => {
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('//')) {
            comms.push(lines[i]);
            if ((lines[i].charAt(0) !== '/')  || 
                ((lines[i].charAt(0) === '/') && (lines[i].charAt(1) !== '/'))) {
               codes.push(lines[i]);
            }
        } else {
            if (lines[i] === '') {
                blanks.push(lines[i]);
            } else {
                codes.push(lines[i]);
            }
        } 
    }
}

let lines = fileRead(input);

getMultiLineComments(lines);

linesWithoutMultiLineComments = lines.filter(line => comms.indexOf(line) === -1);

distribute(linesWithoutMultiLineComments);



console.log(`code: ${codes.length}`);
console.log(`comment: ${comms.length}`);
console.log(`blank: ${blanks.length}`);
console.log('---------------------')
console.log(`total: ${lines.length}`);

