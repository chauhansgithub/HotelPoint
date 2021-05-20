var m = document.getElementById("viewButton");
m.addEventListener("click", myFunction);

function myFunction(){
     let n = document.getElementById("viewButton").innerText;
     if(n === 'View More'){
          document.getElementById("viewButton").innerText = "View Less";
          document.getElementById("hideCities").style.display = "flex";
     }else{
          document.getElementById("viewButton").innerText ='View More';
          document.getElementById("hideCities").style.display = "none";
     }     
}