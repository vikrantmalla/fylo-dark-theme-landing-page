function validateEmail() {

    const email = document.getElementById('emailvalidation');
    const errorMessage = document.querySelector(".error-message");
    const mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (email.value === "") {
        alert('Please provide a email address');
        errorMessage.className = "error-message";
        errorMessage.innerText = "Email cannot be empty";
        email.focus;
    } else if (!mailFormat.test(email.value)) {
        alert('Please provide a valid email address');
        errorMessage.className = "error-message";
        errorMessage.innerText = "Please enter valid Email !!";
        email.focus;
    } else {
        alert('Valid email address!');
        email.focus;
    }
}