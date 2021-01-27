
function clr(){
    var res =document.getElementById("res");
    res.value="";
    val1= val2 =oper= null;

}
function inval(val){
    var res = document.getElementById("res");
    res.value= res.value + val;
}
function inop(op){
    var res =document.getElementById("res")
    oper=op;
    val1=parseInt(res.value);
    res.value = "";

    

}
function result(){
    switch(oper){
        case '+ ': return val1 + val2;break;
        case '- ': return val1 - val2;break;
        case '* ': return val1 * val2;break;
        case '/ ': 
            if (val2 == 0){
                alert("Enter other number!");

            }
            else{
                return val1 / val2;
            }
        break;
    }
}
function calculate(){
    var res = document.getElementById("res");
    if ((val1 == null) || (res.value == "")){
        alert("Please enter a number!");
    }
    else{
        val2=parseInt(res.value);
        res.value=result();
    }
}

