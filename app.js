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



