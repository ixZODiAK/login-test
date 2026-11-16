let forgetPass = document.getElementById("forgetPass"); // a tag
let input = document.getElementById("user-input");
const btn = document.getElementById("btn"); // button submit
const CorrectPassword = "123456"; // correct password

// ===================================================== // 

function checkPassword(){

    let userInput = document.getElementById("user-input").value;
    
    if (userInput === CorrectPassword) {
        alert("Password is correct!\nredirected to the Archticture page.");
        window.location.href = "start.pdf"; // redirect to Archticture.html
    } else {
        alert("Incorrect password , Are you Forget your password ? Please click on Forget Password link to get hint.");
    }

}

btn.addEventListener("click",checkPassword);

forgetPass.addEventListener("click", function() {
    alert("Hint: The Password is 123456. Please try again.");
});
