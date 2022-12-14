console.log("DOM Lesson")

/* 
    Data representation of the objects that comprise the structure and content of a document on the web.

    Basic Structure:
    - Document
        - HTML
            - Head
                - Meta tags
                - Link tags
                - Title tag
                    ... and all of its content (text, attributes, comments)
            - Body
                - Nav
                - Header
                - h1's, img's, aside, div's and so on...
                    + all of their attributes and values
*/

// returns an object
console.log(typeof document)

// How can we see all elements within the body?
console.log(document.body)

// We assign the value of prompt return to the ourName variable
let ourName;
console.log(ourName)
// ourName = prompt("What is your name?")
console.log(ourName)

// Document object deals directly with the .html file it's linked to
// Window object deals directly with the client (browser)

// Creating our first element using DOM

// 1. Use .createElement method on a document object & specify element to create
// 2. Assign it to a variable for future modification
let h1 = document.createElement("h1")

// ! This h1 variable has access to ALL document methods and properties
console.log(h1)
h1.textContent = "My first DOM Element"
h1.style.color = "magenta"
h1.className = "main-h1-element"
console.log(h1)

// 3. Append the element we created (child) to its parent element

document.body.appendChild(h1)

// Accessing elements in DOM

/* 
DOM elements can be accessed several different ways. Most common include:
* getElementById()
* getElementsByClassName()
* getElementsByTagName()
* querySelector()
* querySelectorAll()
*/

// getElementById()
/* 
Returns first instance of an element
*/

let listTitle = document.getElementById("listTitle")
listTitle.style.fontFamily = "Arial"

// getElementsByClassName()
/* 
Returns an HTML Collection of instance of a class
HTML Collection
* array-like object
* allows access to index, length, etc.
* we can loop through it
*/

let listItems = document.getElementsByClassName("listItem")

// returns HTML Collection object list of class instances
console.log(listItems)

// accessing an instance of a class list
listItems[0].style.color = "blue"

// can see its length
console.log(listItems.length)

// can use array methods on it

for (i of listItems) {
    i.style.fontFamily = "Arial"
}

// create additional elements

let li = document.createElement("li")
li.textContent = "Take out trash"
li.className = "listItem"

let ul = document.getElementById("ulToDo")
ul.appendChild(li)


// .getElementsByTagName

/* 
Works just like getElementsByClassName but for tags
*/
let listItemsByTagName = document.getElementsByTagName("li")

console.log(listItemsByTagName)

// .querySelector()
/* 
Returns the first instance of an element
Can access using tag name, id, and class names
*/

let listItemsByQuerySelector = document.querySelector(".listItem")
// the selector must specify the type ("nav" element; ".nav" class; "#nav" id)
console.log(listItemsByQuerySelector)

// .querySelectorAll()
/* 
    Returns a NodeList of all instances of a class, id, or element(s)
    * Allows the use of array methods to iterate over
    */

let listItemsByQuerySelectorAll = document.querySelectorAll(".listItem")
console.log(listItemsByQuerySelectorAll)

listItemsByQuerySelectorAll.forEach(i => console.log(i))

// Quick Challenge

/* 
    1. Create a listItem element that renders "Clean Bedroom"
    2. Change it's color to red
    3. Append to the bottom of our list
    4. Change the color of "pack clothes" to magenta
    5. Remove the last element (Googling)
*/

// Step 1. Create your element
let liChallenge = document.createElement("li")
// Step 2. Assign property of the element object to appropriate value
liChallenge.textContent = "Clean bedroom"
liChallenge.style.color = "red"
// Step 3 Append li element to ul parent element
ul.appendChild(liChallenge)

listItemsByTagName[1].style.color = "magenta"
// ul.removeChild(li)

// Event Listeners

/* 
    Allows us to execute a function when a particular event occurs.
    * .addEventListener() takes an event and fires a callback fx when it occurs
    * event - a string of what happens
    * callback - action that fires when the event occurs
*/

let button = document.getElementById("submit")
button.addEventListener("click", event => {
    // Assign to input var whatever is coming from input field when Add Item is clicked
    let input = document.getElementById("listInput").value
    // Create our listItem element
    let li = document.createElement("li")
    // Assign it a listItem class attribute
    li.className = "listItem"
    // Assign the value stored in input variable into as its rendered text
    li.textContent = input
    // Find the parent element to which you want to append your new element
    let ul = document.getElementById("ulToDo")
    // Append new child element to the parent element
    ul.appendChild(li)
})

// Challenge
// Create a new static button that says Remove Item
// When clicked, remove item will remove the last element from our ul
// 10 mins

let rmvBtn = document.querySelector("#remove")

rmvBtn.addEventListener("click", e => {
    e.target.style.color = "red"
    let length = document.getElementsByClassName("listItem").length - 1
    let li = document.getElementsByClassName("listItem")[length]
    console.log(li)
    let ul = document.getElementById("ulToDo")
    ul.removeChild(li)
})




