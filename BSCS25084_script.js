function greet() {
    alert("Welcome to TechNova! \nExplore our wide range of products today!");
}

if (window.location.pathname.includes("BSCS25084_Home.html")) {
    greet();
}

const yearElement = document.getElementById("cyear");
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

function showAvail(button) {
    const productBox = button.closest('.product-box');
    const availability = productBox.querySelector('.availability').textContent.trim();

    if (availability === "In Stock") {
        alert("The Product is Available \nAdded to Cart!");
    } else {
        alert("The Product is not Available \nAdded to Wishlist!");
    }
}


const newsletterForm = document.querySelector(".newsletter-box form");

if (newsletterForm) {
    newsletterForm.onsubmit = function () {
        const nameInput = newsletterForm.querySelector("input[name='name']");
        const emailInput = newsletterForm.querySelector("input[name='email']");
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (name === "" && email === "") {
    alert("Please enter your full name and email address.");
    return false;
        }

        if (name === "") {
            alert("Please enter your full name.");
            return false;
        }

        if (email === "") {
            alert("Please enter your email address.");
            return false;
        }

        if (!(email.includes("@")) || !(email.includes("."))) {
            alert("Please enter a valid email address.");
            return false;
        }
        else {
        alert("Thanks for subscribing, " + name + "!");
        return false;
        }
        }
}


var chatForm = document.getElementById("chat-form");

if (chatForm) {
    chatForm.onsubmit = function () {
        sendMessage();
        return false; // stop page refresh
    }
}

function sendMessage() {
    var inputBox = document.getElementById("user-input");
    var input = inputBox.value.toLowerCase();
    var chatLog = document.getElementById("chat-log");

    if (input === "") {
        alert("Please type something!");
        return false;
    }

    var userMsg = document.createElement("p");
    userMsg.textContent = "You: " + input;
    chatLog.appendChild(userMsg);

    var reply = "I don't understand.";

    if (input.includes("hello") || input.includes("hi")) {
        reply = "Hello!";
    }
    if (input.includes("how are you")) {
        reply = "I'm fine!";
    }
    if (input.includes("bye")) {
        reply = "Goodbye!";
    }

    var botMsg = document.createElement("p");
    botMsg.textContent = "Bot: " + reply;
    chatLog.appendChild(botMsg);

    inputBox.value = "";

    return false;
}

