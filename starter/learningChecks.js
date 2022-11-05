// The goal of this file is to access the concepts from the lesson.

// function used to get random integer in a range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// Variables and numbers

// 1. Create a mutable variable named "year" and assign it to the current year.

// 2. Create a constant variable named "birthYear" and assign it the value of your birth year

// 3. Create a mutable variable named "age" and assign it to your age using "year" and "birthYear" 
// (for the sake of simplicity; we will assume that your age is perfectly inline with the year; sorry to anyone born in later months.)

// Use the following variable for the next questions
let x = 8;
// 4. Using JavaScript, show how you could multiply x by 7.

// 5. Show how we could find x to the power of 3

// 6. Show how we could determine if x was even or odd using JS

// Use the following variables for the next question
x = getRandomInt(0, 30);
let y = getRandomInt(0, 30);
console.log(x,y)

// Booleans and if statements

// 7. Write an if statement which logs "x is greater than or equal to y" if x is greater than or equal to y. 


// 8. Write an if statement that console logs "both bigger" if both x and y are greater than 15; if both aren't bigger then console log "only one is bigger" if only one of x or y is strictly greater
// then console log "neither are greater than 15" if neither are greater than 15
x = getRandomInt(0, 30);
y = getRandomInt(0, 30);
console.log(x,y)


// Strings, arrays and loops

// Use the following variables for the next question
let desserts = ['carrot cake', 'kitkat', 'ice cream', 'apple pie'];
let hello = 'hello'
let world = 'world'

// 9. Show how you can access the first, the third and the last character of the hello variable. Bonus if you can find the last character without using the actual index value

hello[0]
hello [2]
hello[hello.length-1]


// 10. Using hello and world, combine them together with an empty space between them
hello+""+world
// 11. Using array methods, create a new variable newDesserts which is a copy of dessert except without 'apple pie'
let newDesserts = desserts.slice(0,3);

// 12. Add your favorite dessert to newDesserts (add to the end of the array)
newDesserts.push("cupcake");

// 13. Get the index of 'ice cream' from newDessert
newDesserts.indexOf("ice cream");


// 14 Update newDesserts by replacing 'ice cream' with another dessert of your choosing.
newDesserts.splice(0,2,"lollipop");
newDesserts.splice(newDesserts.indexOf("ice cream"),1, "lollipop")

let vowels = ['a', 'e', 'i', 'o', 'u'];
// 15. Using a for loop, count the number of vowels in hello. The variable of vowels has been provided and can be used.


// JSON Objects
let books = [
    {
        'title': 'Our Missing Hearts',
        'author': 'Celeste Ng',
        'rating': 8.5
    },
    {
        'title': 'The Couple Next Door',
        'author': 'Shari Lapena',
        'rating': 3
    },
    {
        'title': 'Seveneves',
        'author': 'Neal Stephenson',
        'rating': 7.5
    },
    {
        'title': "I'm Glad My Mom Died",
        'author': 'Jenette McCurdy',
        'rating': 8
    },
    
];

// 16. Add another book rating to the end of books
books.push({
    'title': 'hunger games',
    'author': 'friend',
    'rating': "10"
})

// 17. Iterate through books using a loop of your choosing and get the average book rating. (The average is the sum of all ratings divided by the number of ratings)
let ratingSum = 0;
for (const book of books){
    ratingSum = ratingSum + book ['rating']
}

let averageRating = ratingSum/books.length

// 18. Design an object representing a restaurant. This is an open-ended question meant to get you thinking about how to represent real world things
let restaurant = {
    // add attributes you think could be helpful
    "name": "Nook",
    "cuisine": "Italian",
    "menu": ["Pasta","Pizza"],
    "chef": "Leo",
    "priceRange": "Expensive",
    "location": "Canada"
}



// Functions

// 19. Create a function that takes an array of numbers and calculates the average.
// Test that function works correctly using the following variables.
// You should expect the answer that is commented out next to the variable
// Hint: don't forget to think about how to handle an empty list

function myAverage(arr){
    // your code here
arrSum=0
for(let i=0;i<arr.length;i++){
    arrSum = arrSum + arr[i]
}
if(arr.length === 0){
    return 0;
}
else{
    return arrSum/arr.length
}
}

let array1 = [1,2,3,4,5]; // 3
let array2 = []; // 0
let array3 = [65, 89, 34, 13, 100, 78, 79]; // 65.42857142857143

// 20. Create a function that takes an array of numbers and returns the minimum value.
// When the list is empty, there is no minimum, therefore would be NaN
// Test that function works correctly using the following variables.
// You should expect the answer that is commented out next to the variable
// Hint: don't forget to think about how to handle an empty list

function findMin(arr){
    // your code here
}

array1 = [-1, 0, 7, 34, -17, 100]; // -17
array2 = []; // NaN
array3 = [1000, 37482, 58034, 29, 182, 102]; // 29

// 21. Create a function that counts the amount of words in a string
// Test that function works correctly using the following variables.
// You should expect the answer that is commented out next to the variable
// Hint: the string method split() splits a string on a input string. (https://www.w3schools.com/JSREF/jsref_split.asp)

function getWordNum(myString){
    // your code here
}

let string1 = "Hello World"; // 2
let string2 = ""; // 0
let string3 = "This is a string with multiple words"; // 7