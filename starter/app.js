console.log("connected");
console.log("I am here!!!!!");

let num = Math.random ();
let newNum = Math.random();
console.log(num);
console.log(newNum);

if(num<newNum){
console.log("new num is greater")
}
else {
console.log("new num is not greater")
}

//What if we have morte than one option?
if(num<0.3){
    console.log("less than 0.3")
}
else if(num<0.6){
    console.log("less than 0.6; greater than 0.3");
}
else{
    console.log("greater than 0.6")
}

let names = ["Vincent", "Lucy", "Richard"];
console.log("first name", names[0]);

names.push("Victor");
console.log(names);

names.shift();
console.log(names);

let favDesserts = ["ice crem", "carrot cake", "lemon loaf", "apple pie"];

console.log(favDesserts.slice(favDesserts.length-2))

console.log("includes",favDesserts.includes("creme brulee"));

console.log(favDesserts.indexOf("carrot cake"));

favDesserts.splice(2,1,"bubble tea");
console.log(favDesserts);

favDesserts.splice(1,0, "cookie");
console.log(favDesserts);

favDesserts.splice(4, 1, "custard");
console.log(favDesserts);

for(let i=1;i<=5;i++){
    console.log(i);
}

for(let i=5;i>0;i--){
    console.log(i)
}

for (let i=0;i<favDesserts.length;i++){
    console.log(faveDesserts[i])
}

for(const dessert of favDesserts){
    console.log(dessert)
}

let value = 0;
const goal = 10;

while(value<goal){
    console.log(value, "is too small");

    value=value +2;
}

let student = {
    "name": "Jane Doe",
    "major": "Communications"
};
console.log(student['major']);

let guest ={
    "name": "Jane Doe",
    "Attendance": "Going"
}

function myFunction(x){
    return x *2;
}

console.log(myFunction(7));

console.log(document.querySelector("#my-button"));

let myButton = document.querySelector("#myButton");

myButton.addEventListener("click",function(){
    alert("You've pressed the button!")
})

