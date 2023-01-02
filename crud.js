//perform a fetch from the server & display the data on the DOM
//function that does GET request and pushes the data into a display function using a ,map or .forEah.
//display function that pushes the data to a specific location on the DOM.

function displayFunction(data){
    let location = document.querySelector("#data")
    let divi = document.createElement("div")
    divi.innerHTML = 
    `<img src = ${data.image}>
    <p>${data.name}</p>`
    console.log(data)

    let newDiv = location.appendChild(divi)
    console.log(newDiv)
}

fetch('http://localhost:3000/animals')
.then(response => response.json())
.then(data => data.forEach(item => displayFunction(item)))
