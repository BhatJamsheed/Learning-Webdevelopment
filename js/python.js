function changeColor(clr){
    if(clr==="red")
        document.getElementById("bgdiv").style.background="red";
   else if(clr==="yellow")
        document.getElementById("bgdiv").style.background="yellow";
    else if(clr==="blue")
        document.getElementById("bgdiv").style.background="blue";
    else if(clr==="green")
        document.getElementById("bgdiv").style.background="green";

    else 
    alert("Invalid Color Selected");
}