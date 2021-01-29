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









// Display the BOM Information on the innerHTML of the elements
var href=document.getElementById("hr").innerHTML="Answer"+ " -> " + location.href
var protocol=document.getElementById("pro").innerHTML="Answer"+ " -> " + location.protocol
var host=document.getElementById("ht").innerHTML="Answer"+ " -> " + location.host
var port=document.getElementById("pt").innerHTML="Answer"+ " -> " + location.port
var hostname=document.getElementById("hn").innerHTML="Answer"+ " -> " + location.hostname




var appname=document.getElementById("an").innerHTML="Answer"+ " -> " + navigator.appName
var appversion=document.getElementById("av").innerHTML="Answer"+ " -> " + navigator.appVersion
var platform=document.getElementById("pl").innerHTML="Answer"+ " -> " + navigator.platform
var language=document.getElementById("lg").innerHTML="Answer"+ " -> " + navigator.language
var cookieenabled=document.getElementById("ce").innerHTML="Answer"+ " -> " + navigator.cookieEnabled




var height=document.getElementById("hg").innerHTML="Answer"+ " -> " + screen.height
var width=document.getElementById("wd").innerHTML="Answer"+ " -> " + screen.width
var pixeldepth=document.getElementById("pd").innerHTML="Answer"+ " -> " + screen.pixelDepth




var length=document.getElementById("len").innerHTML="Answer"+ " -> " + history.length
var state=document.getElementById("sta").innerHTML="Answer"+ " -> " + history.state