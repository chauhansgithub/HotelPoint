var b = document.getElementById("loginButton");
b.addEventListener("click", userLogin)

function userLogin() {
     var logged = document.getElementById("loginButton").innerHTML; 
     let username = document.getElementById("eusername").value;
     let password = document.getElementById("epassword").value;
     
     if(username === 'admin' && password === 'admin') {         
         document.getElementById('payButton').disabled = false; 
         document.getElementById('payButton').style.color = "white";  

     } 
 }
