/*Previous attempt to make the login and registration feature*/
/*
function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var registrationData = {
        username: username,
        password: password
    };

    localStorage.setItem("registrationData", JSON.stringify(registrationData));

    if(username == "" || password == ""){
        alert("Please fill up the required fields")
    }
    else{
        window.location.href = "login.html";
    }
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    var registrationData = JSON.parse(localStorage.getItem("registrationData"));

    
    if (registrationData && username === registrationData.username && password === registrationData.password) {
        
        window.location.href = "viewposts.html";
    } else {
        alert("Invalid username or password");
    }
}

app.listen(3000, function() {
    console.log("Server is running on 3000");
})
*/