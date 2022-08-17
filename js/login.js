
// step - 1: add event handler with the submit button
document.getElementById('submit-btn').addEventListener('click', function(){
    // step - 2: get the email value
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step - 3: get the password value
    const passField = document.getElementById('user-pass');
    const password = passField.value;

    // step - 4: it should not use in a validation
    if(email === "methu@gmail.com" && password === "secret"){
        window.location.href = "bank.html";
    }
    else{
        alert("You input invalid email or password. Please provide valid input");
    }
})