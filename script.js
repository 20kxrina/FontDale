function validateForm(event){

    event.preventDefault();

    let valid = true;

    const fullName =
    document.getElementById("fullName").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const phone =
    document.getElementById("phone").value.trim();

    const interest =
    document.getElementById("interest").value;

    const frequency =
    document.getElementById("frequency").value;

    const agree =
    document.getElementById("agree").checked;

    document.getElementById("err-name").innerHTML = "";

    document.getElementById("err-email").innerHTML = "";

    document.getElementById("err-phone").innerHTML = "";

    document.getElementById("err-interest").innerHTML = "";

    document.getElementById("err-frequency").innerHTML = "";

    document.getElementById("err-agree").innerHTML = "";

    if(fullName === ""){

        document.getElementById("err-name").innerHTML =
        "Full name must be filled.";

        valid = false;
    }

    if(email === ""){

        document.getElementById("err-email").innerHTML =
        "Email must be filled.";

        valid = false;
    }

    else if(
        !email.includes("@") ||
        !email.includes(".")
    ){

        document.getElementById("err-email").innerHTML =
        "Invalid email format.";

        valid = false;
    }

    if(phone === ""){

        document.getElementById("err-phone").innerHTML =
        "Phone number must be filled.";

        valid = false;
    }

    else if(phone.length < 10){

        document.getElementById("err-phone").innerHTML =
        "Phone number must contain at least 10 digits.";

        valid = false;
    }

    if(interest === ""){

        document.getElementById("err-interest").innerHTML =
        "Please select a category.";

        valid = false;
    }

    if(frequency === ""){

        document.getElementById("err-frequency").innerHTML =
        "Please select update preference.";

        valid = false;
    }

    if(!agree){

        document.getElementById("err-agree").innerHTML =
        "You must agree before submitting.";

        valid = false;
    }

    if(valid){

        document.getElementById("success-toast")
        .classList.remove("hidden");

        document.getElementById("newsletterForm").reset();

    }

    return false;
}