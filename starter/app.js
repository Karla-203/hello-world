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


let cofeeLink = document.querySelector("#coffee");
let codingLink = document.querySelector("#coding");
let rainLink = document.querySelector("#rain")

let topic = document.querySelector("#topic");

cofeeLink.addEventListener('click',()=>{
    addTopicParagraph("This is my coffee section")
});

codingLink.addEventListener('click',()=>{
    addTopicParagraph("This my coding section")
});

rainLink.addEventListener('click',()=>{
    addTopicParagraph("This is my rainy day section")
});

function addTopicParagraph(topicText){
    // delete anything in topic area
    topic.innerHTML="";

    // create HTML element for our paragraph
    const Node = document.createElement("p"); //<p></p>

    // add paragraph
    Node.innerHTML =topicText;

    // insert [aragraph into topic element]
    topic.appendChild(Node);

}

let dessertList = [
    {
        'name': 'Saffrin',
        'dessert':'Carrot cake'
    }
]

function generateDessertTable(dessert){
    //remove all current rows; don't want duplicates
    let tableBody = document.querySelector("dessert-table-body");
    tableBody.innerHTML="";

    //for each dessert, add a row with the name and the preferred dessert

    //define table
    let table = document.querySelector("dessert-table");

    //for loop to go through each desert
    dessert.array.forEach(dessert => {
        // create a tr element
        const tr = table.insertRow(0);

        //create a td element for name and for preferred dessert
        let name = tr. insertCell(0);
        let preferredDessert =tr.insertCell(1);

        //set my tds to the name and the dessert
        name.innerHTML = dessert['name'];
        preferredDessert.innerHTML = dessert["dessert"];

        //append this new row to the table body
        tableBody.appendChild(tr);

    });

}

let submitButton = document.querySelector("#submit-button");

submitButton.addEventListener('click',()=>{
    // get name from HTML input
    let name = document.querySelector("#name-input").value;

    // get preferred dessert from HTML input
    let preferredDessert = document.querySelector("#dessert").value;

    // add values to my dessert list
    dessertList.push({
        'name': name,
        'dessert': preferredDessert
    })

    // needs to get added to my table
    generateDessertTable(dessertList);
})

generateDessertTable(dessertList);