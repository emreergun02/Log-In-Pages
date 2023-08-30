function showPass(){ // Function of #showbutton icon
    var password = document.getElementById("password"); // Take the value of password input.

    if(password.type == 'password'){ // If input's type is password, it will be change for text but if it's not, it won't change.
        password.type = 'text';
    }
    else{
        password.type = 'password';
    }
}