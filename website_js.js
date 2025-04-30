/*
* 5/28/2023
* 4/30/2025
*
*/
var updateDate = "4/30/2025";

function alertButton() {
    alert("Hello World!");
}


function footerContent(){
   const footer = document.getElementById("footerContainer");

   footer.innerHTML = `
   <p>Author: Henry Timmons</p>
        <p style="display:inline-block">Last Updated: </p> <p style="display:inline-block" id="currentDate"></p>

        <p style=" float: right; padding-right: 50px; text-align: right;"> 
            <a href="https://www.linkedin.com/in/henry-timmons-14500423a/" style="color: white; text-decoration:none;"> 
                <i class="fa fa-linkedin" style="font-size:20px"></i> LinkedIn
            </a> 
        </p>
        
        <p style=" float: right; padding-right: 50px; text-align: right;"> 
            <a href="https://github.com/FugitiveSine" style="color: white; text-decoration:none;">
                <i class="fa fa-github" style="font-size:20px"></i> Github
            </a>
        </p>
        `;
        document.getElementById("currentDate").innerText = updateDate; // updates the id of currentDate which is in html with the variable of updateDate thats in js
}
window.onload = function(){
    footerContent();
}

