

let Returnvalue = 1;
function ValidateForm() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");

  // Validation of Username
    if (username.value == "") {
        document.getElementById("user").innerHTML = "Username is empty.";
        Returnvalue = 0;
    } else if (username.value.length < 3) {
        document.getElementById("user").innerHTML = "Username min 3 characters.";
        Returnvalue = 0;
    } else {
        document.getElementById("user").innerHTML = "";
        Returnvalue = 1;
    }

    // Validation of Password

    if (password.value == "") {
        document.getElementById("pass").innerHTML = "Password is empty.";
        Returnvalue = 0;
    } else if (password.value.length < 7) {
        document.getElementById("pass").innerHTML = "Password min 8 characters.";
        Returnvalue = 0;
    } else {
        document.getElementById("pass").innerHTML = "";
        Returnvalue = 1;
    }


// Returning True or False
    if (Returnvalue) {
        return true;
    } else {
        return false;
    }

}