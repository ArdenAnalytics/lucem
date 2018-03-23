var teacherUsername = "jsmith";
var studentUsername = "jdoe";
var parentUsername = "adoe";
var administrationUsername = "amilner";

var teacherPassword = "tyerocks!123";
var studentPassword = "tyerocks!123";
var parentPassword = "tyerocks!123";
var administrationPassword = "tyerocks!123";

function validate() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;
    if (usernameInput == teacherUsername && passwordInput == teacherPassword) {
        window.location = "teacherPortal/index.html";
    } else if (usernameInput == studentUsername && passwordInput == studentPassword) {
        window.location = "studentPortal/index.html";
    } else if (usernameInput == parentUsername && passwordInput == parentPassword) {
        window.location = "parentPortal/index.html";
    } else if (usernameInput == administrationUsername && passwordInput == administrationPassword) {
        window.location = "administrationPortal/index.html";
    } else {
        $("#errorMessage").removeClass("hidden");
    }
};

window.addEventListener("keydown", pressedKeyCheck, false);

function pressedKeyCheck(e) {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    if (e.keyCode == "13") {
        validate();
    }
    /* else if (){
        
    } */
    else {
        $("#errorMessage").addClass("hidden");
    }
};