document.getElementById("bankForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let accountType = document.getElementById("accountType").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || phone === "" || accountType === "" || password === "") {
        document.getElementById("message").innerHTML = "Please fill all fields!";
        document.getElementById("message").style.color = "red";
    } else {
        document.getElementById("message").innerHTML = "Registration Successful!";
        document.getElementById("message").style.color = "green";
        document.getElementById("bankForm").reset();
    }
});