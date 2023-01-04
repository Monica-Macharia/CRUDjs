//perform a fetch from the server & display the data on the DOM
//function that does GET request and pushes the data into a display function using a ,map or .forEah.
//display function that pushes the data to a specific location on the DOM.

function displayFunction(data){
    let location = document.querySelector("#data")
    let divi = document.createElement("div")
    divi.innerHTML = 
    `<img src = ${data.image}>
    <p>Id: ${data.id}</p>
    <p>Name: ${data.name}</p>`
    console.log(data)

    let newDiv = location.appendChild(divi)
    console.log(newDiv)
}

fetch('http://localhost:3000/animals')
.then(response => response.json())
.then(data => data.map(item => displayFunction(item)))

//task
//place an eventlistener on form submit button
//grab the incoming value
//customize fetch to the incoming value
//push the fetch results to the DOM

//step1 add a eventlistener, prevent default

function searcher(){
    document.querySelector("form").addEventListener("submit", function(e){
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