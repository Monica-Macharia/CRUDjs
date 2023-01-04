//perform a fetch from the server & display the data on the DOM
//function that does GET request and pushes the data into a display function using a ,map or .forEah.
//display function that pushes the data to a specific location on the DOM.

function displayFunction(data){
    let location = document.querySelector("#data")
    let divi = document.createElement("div")
    divi.innerHTML = 
    `<img src = ${data.image}>
    <p class="add">Donations: ${data.donations}</p>
    <p>Name: ${data.name}</p>
    <button class="donate">Donate $30</button>
    <button>Delete</button>`
    console.log(data)

    let newDiv = location.appendChild(divi)
    console.log(newDiv)
}

fetch('http://localhost:3000/animals')
.then(response => response.json())
.then(data => data.map(item => displayFunction(item)))

//task - SEARCH FEATURE
//place an eventlistener on form submit button
//grab the incoming value
//customize fetch to the incoming value
//push the fetch results to the DOM

//step1 add a eventlistener, prevent default

function searcher(){
    document.querySelector("form#filter").addEventListener("submit", function(e){
        e.preventDefault();
        let input = document.querySelector("input#search").value
        console.log(input)
       
        
    fetch(`http://localhost:3000/animals/${input}`)
    .then(res => res.json())
    .then(data => {
        let places = document.querySelector("div#data");
        places.innerHTML =         
         `<img src = ${data.image}>`
       
        
    })
    })

    
}
searcher();


//task POST FEATURE
//PSEDOCODE
//grab elements coming from the form
//and add them to DOM display function
//post them to the database



    let postingForm = document.querySelector("form#post")
    
    postingForm.addEventListener("submit", function(e){
        e.preventDefault()
        let names = document.querySelector("input#new").value
        let image = document.querySelector("input#images").value
        let additionObj = {
            name: names,
            image: image
        }
        displayFunction(additionObj)
        fetcher(additionObj)
        

    })
        




function fetcher(additionObj){
    const configurationObject ={
       method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(additionObj)
    }

    fetch("http://localhost:3000/animals", configurationObject)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        alert("something went wrong!")
        console.log(error.message)

    })
}


//PATCH (UPDATING A FEATURE)
//Add an event listener to the update button.
//once clicked add 10 dollars to the donations text
//use PATCH to persist the change to the database

let donations = document.querySelector("button.donate")
console.log(donations)
    donations.addEventListener("click", function(){
       console.log( document.querySelector(".add"))
        
    })