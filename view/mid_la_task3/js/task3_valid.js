function handleSubmit() {
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var select = document.getElementById("select").value;
    var phone = document.getElementById("phn").value;
    var email = document.getElementById("email").value;
    var createPass = document.getElementById("crepass").value;
    var confirmPass = document.getElementById("conpass").value;
    var donationName = document.getElementById("dname").value;
    var amount = document.getElementById("amount").value;
    var checkbox1 = document.getElementById("checkbox1").value;
    var checkbox2 = document.getElementById("checkbox2").value;
    var textarea = document.getElementById("textarea").value;
    var button = document.getElementById("button").value;

    // validation
    if (fName === "" || lName === "" || address === "" || city === "" || select === "" || phone === "" || email === "" ||
        createPass === "" || confirmPass === "" || donationName === "" || amount === "" ||
        checkbox1 === "" || checkbox2 === "" || textarea === "") {
        alert("fill the forms");
        return false;
    }

    const name = /^[A-Za-z]+$/;
    if (!name.test(fName) && !name.test(lName)) {
        alert("First and Last Name must contain only letters.");
        return false;
    }
    const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.test(createPass)) {
        alert("Password must be at least 8 characters and contain an uppercase letter, a lowercase letter, a digit, and a special character.");
        return false;
    }

    if (createPass !== confirmPass) {
        alert("Passwords do not match.");
        return false;
    }

    const phoneNumber = /^\d{11}$/;
    if (!phoneNumber.test(phone)) {
        alert("Phone number must be exactly 11 digits.");
        return false;
    }



    alert("Successfully donate \n" +
        "fname:" + fName + "\n" +
        "lname:" + lName + "\n" +
        "Address:" + address + "\n" +
        "name:" + city + "\n" +
        "name:" + select + "\n" +
        "name:" + phone + "\n" +
        "name:" + email + "\n" +
        "name:" + createPass + "\n" +
        "name:" + confirmPass + "\n" +
        "name:" + donationName + "\n" +
        "name:" + amount + "\n" +
        "name:" + checkbox1 + "\n" +
        "name:" + checkbox2 + "\n" +
        "name:" + checkbox3 + "\n" +
        "name:" + checkbox4 + "\n" +
        "name:" + textarea + "\n" +
        "name:" + button + "\n"
    );


}