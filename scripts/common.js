headerTemplate();
footerTemplate();
 

var b = document.getElementById("loginButton");
b.addEventListener("click", userLogin)

function userLogin() {
     let username = document.getElementById("eusername").value;
     let password = document.getElementById("epassword").value;
     
     if(username === 'admin' && password === 'admin') {         
         alert("Successfully loggedin");
         document.getElementById('sign-in-button').innerText = "Logout";
         localStorage.setItem("username", "admin");
         localStorage.setItem("password", "admin")              
     } 
 }


function headerTemplate () {
     let headertemp = 
     '<div class="innerHeader">' +
                    '<a href="index.html"><img  id="logoImg" src="assests/images/logo.png" alt="logo"></a>' + 
                    '<button type="button" class="btn btn-light btn-sm" data-toggle="modal" data-target="#login-modal" id="sign-in-button">LOGIN</button>' +
     '</div>';
     document.getElementById('header').innerHTML += headertemp;
}

function footerTemplate () {
     let footertemp = 
     '<div class="innerFooter">' +
                    '<button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#contact-modal" id="contact-us-button">Contact Us</button>' +
                    '<p id="copyRight">&#169 2020 ROOM SEARCH PVT LTD</p>' +
                    '<div id="socialButton">' +
                         '<a href="https://www.facebook.com" target="_blank"><img class="socialImg" src="assests/images/facebook.png" alt="facebook_img"></a>' +
                         '<a href="https://www.instagram.com" target="_blank"><img class="socialImg" src="assests/images/instagram.png" alt="instagram_img"></a>' +
                         '<a href="https://www.twitter.com" target="_blank"><img class="socialImg" src="assests/images/twitter.png" alt="twitter_img"></a>' +
                    '</div>' +
     '</div>';

     document.getElementById('footer').innerHTML += footertemp;
}