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

fetch("https//swapi.dev/api/people/1").then(response=>{
    //console.log(response);
    response.json().then(data=>{
        console.log(data);
    })
});

fetch("https//swapi.dev/api/people/-o").then(response=>{
    console.log(response);
}).catch(erro=>{
    console.log(error);
});

let apiInput = document.querySelector("#api-input");
let apiButton = document.querySelector("#api-button");
let apiResult = document.querySelector("#api-result");

const apiURL = 'https://swapi.dev/api/people/'

apiButton.addEventListener("click", async ()=>{
    //get character ID value
    let charID = apiInput.value;

    //ensure that this input is there
    if(charID===''){
        return;
    }

    // make API GET request
    const response = await fetch(apiURL+charID)
    
    // check if success
    if(!response.ok){
        //handle error

    }
    else{
        //display name
        addErrorBar();

    }

    // display name
    let character = await response.json();
    addCharacterName

});

function addErrorBar({
    //remove html from area
    apiResult.innerHTML ="";

    //add an error bar
    apiResult.innerHTML ='<div class="alert alert-warning" role="alert">This ID was not found</div>'


})

function addCharacterName(character){
    //remove HTML from area
    apiResult.innerHTML = "";

    // display character in area
    apiResult.innerHTML = ['name'];
}
