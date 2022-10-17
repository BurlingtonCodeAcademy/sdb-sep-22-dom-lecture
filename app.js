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


