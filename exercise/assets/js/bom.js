/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
const All = document.querySelectorAll(".collection-item");









// Display the BOM Information on the innerHTML of the elements

All.forEach(function(element, index) {
    // getting the property names from a tag text and making them camelcase
    const behaviour = element.firstChild.textContent[0].toLowerCase() + element.firstChild.textContent.slice(1)
    
    // a place for the values
    let answer = element.firstElementChild


    if (index <= 4) {
        answer.innerHTML = location[behaviour]
    }else if (index <= 9) {
        answer.innerHTML = navigator[behaviour]
    }else if (index <= 12) {
        answer.innerHTML = screen[behaviour]
    }else{
        answer.innerHTML = history[behaviour]
    }
    
    
});
