let savedEmail = "";
let savedPassword = "";

// Show Register Page
function showRegister() {
    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("registerSection").classList.remove("hidden");
}

// Show Login Page
function showLogin() {
    document.getElementById("registerSection").classList.add("hidden");
    document.getElementById("loginSection").classList.remove("hidden");
}

// Register Function
function register() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if (name === "" || email === "" || password === "") {
        document.getElementById("registerMessage").innerHTML = "⚠ Please fill all fields";
        return;
    }

    savedEmail = email;
    savedPassword = password;

    document.getElementById("registerMessage").innerHTML = "✅ Registration Successful!";
}

// Login Function
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === savedEmail && password === savedPassword) {
        document.getElementById("loginSection").classList.add("hidden");
        document.getElementById("bookingSection").classList.remove("hidden");
    } else {
        document.getElementById("loginMessage").innerHTML = "❌ Invalid Login Details";
    }
}

// Book Ride
function bookRide() {
    let location = document.getElementById("location").value;
    let plan = document.getElementById("plan").value;

    document.getElementById("bookingMessage").innerHTML =
        "✅ Ride Booked at " + location + "<br>Plan: " + plan;
}

// Logout
function logout() {
    document.getElementById("bookingSection").classList.add("hidden");
    document.getElementById("loginSection").classList.remove("hidden");
}