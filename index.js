const divide = function () {return 2000/100};

const square = parameter => parameter*parameter;

const add = (parameter1, parameter2) => parameter1 + parameter2;


//function expression example 
//const foo = function() {
    //return 'bar'; }

//arrow function example 
//NOTE that if the function body consists of a single expression, you no longer need to wrap in curly braces 
//NOTE  when there are no braces, arrow functions have an implicit return, i.e., they automatically return the result of the last expression! 
//This is the only situation in which a JavaScript function doesn't require explicit return with the return keyword.
//If we need to do more work than return a single expression, we'll need {} to wrap the multiple lines of code, and we'll have to declare a return.

//const add = (parameter1, parameter2) => parameter1 + parameter2;

//parameter1, parameter2) => parameter1 + parameter2;
// Parameter list ^^^^^   // Function Body ^^^^^^^^ 


//arrow functions are often used in JS iterator methods 
//The .map() method is called on an Array and takes a function as an argument. 
//It iterates through the array, passing each element in turn to the function. 
//It then takes that function's return value and adds it to a new array, leaving the original array unchanged. 
//That new array, containing the modified elements, is returned at the end after all iterations are complete.
//example of the .map method 

//const nums = [1,2,3];
//const squares = nums.map(x => x ** 2); 
//squares; //=> [1,4,9]
//nums; //=> [1,2,3] 