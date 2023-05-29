
var updateDate = "5/28/2023";

function alertButton() {
    alert("Hello World!");
}


function footerContent(){
    document.write("<p>Author: Henry Timmons</p>");
    document.write("<p>Last Updated: " + updateDate + "</p>");
}
window.onload = function(){
    document.getElementById("currentDate").innerHTML = updateDate;
}

