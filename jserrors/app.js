// // https://gist.github.com/epoch/6e998e8bb1542b720d486a5aead31f16

// JS Errors Practice
// In the spaces below, write down what each error message means. Try coming up with an answer on your own first, based solely on the error message. You can then use Google to confirm your answer.

// If your answer needs some code context, feel free to provide an example code snippet in the spaces provided. This, however, is not required!

// The prompts get progressively more difficult. If you get stuck, check the solution branch of this repo!

// Hint: In a few of the spaces below, rather than just putting stuff inside the <script> tags you may need to edit the tags themselves.

// Bonus
// Try generating these errors yourself! You can edit the <script> element of the enclosed index.html as your scratch pad.

// Uncaught SyntaxError: Unexpected token {
// This happens when JS encounters an unexpected token. Tokens are +, -, ?, if, else, and var etc

// if ('a' === 'a' {
//     true;
// }

// Uncaught ReferenceError: greeting is not defined
// An error when a non-existent variable is referenced. (in this case "greetings" is defined but not "greeting")

// var greetings = 'next-gen'
// if (greeting === 'next-gen') {
//     true;
// }


// GET file:///scripts.js net::ERR_FILE_NOT_FOUND
// The filename does not refer to a valid file at that directory 



// GET http://maxcdn.com/bootstrap.css 400 (Not Found)
// The filename/directory was wrong. Probably need to use https

// <script>
// // Optional code goes here
// </script>



// Uncaught TypeError: "hello".push is not a function
// The TypeError object represents an error when an operation could not be performed
//  typically (but not exclusively) when a value is not of the expected type.
// an operand or argument passed to a function is incompatible with the type expected
// var arr = [];
// var data = 
//     { 
//         "name": "ananta",
//         "age": "15",
//     }
// data.push();

// OR   when attempting to modify a value that cannot be changed; 



// Uncaught TypeError: this.greet is not a function
// the object passed to greet function is incompatible with the type expected


// Uncaught TypeError: Cannot read property 'name' of undefined
// the object from which the name property is attempted to be extracted in undefined.
// var user = 
//     { 
//         "name": "ananta",
//         "age": "15",
//     }
// user = undefined;
// user.name;


// Uncaught SyntaxError: missing ) after argument list
// the terminating parenthesis is missing
// console.log('PI: ' Math.PI


// Uncaught ReferenceError: Invalid left-hand side in assignment
// the left hand side is not expecting that operator to be applied on it

// if (Math.PI = 3 || Math.PI = 4) { 
//     console.log('no way!');
//   }


// Uncaught SyntaxError: Unexpected number
// a number was encountered where it wasn't expected
// for (let i = 0; i < 5; i++)5 {
//     console.log(i);
//   }


// Uncaught SyntaxError: Unexpected string
// a string was encountered where it wasn't expected
// for (let i = 0; i < 5; i++)badddd {
//     console.log(i);
//   }


// Uncaught SyntaxError: Unexpected identifier
// Uncaught SyntaxError: Unexpected string
// an identifier was encountered where it wasn't expected

// for (let i = 0; i < 5; i++)badddd {
//     console.log(i);
//   }


// Uncaught SyntaxError: Unterminated template literal
// String literals must be enclosed by single (') or double (") quotes.
// you have opening and closing quotes (single or double) for your string literal,
// you have escaped your string literal correctly,
// your string literal isn't split across multiple lines.

// var longString = 'This is a very long string which needs 
//                   to wrap across multiple lines because 
//                   otherwise my code is unreadable.';



// Uncaught RangeError: Maximum call stack size exceeded
// the function callstack max limit is exceeded
// var doWork = ()=> {
//     doWork();
// }

// doWork();
