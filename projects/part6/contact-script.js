
const ACCESS_KEY = "b92d4f63-910a-4ddc-9c1d-86ed0be2d039";

const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

const showFeedback = (message, type) => {
    feedback.innerHTML = message;
    feedback.className = type;
};

const wait = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const sendMessage = async () => {
    const data = {
        access_key: ACCESS_KEY,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    return response.json();
};

form.onsubmit = async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        showFeedback("Please fill out every field correctly, then try again.", "feedback-error");
        return;
    }

    showFeedback("Sending your message...", "feedback-sending");

    const result = await sendMessage();
    await wait(1000);

    if (result.success) {
        showFeedback("Thank you. Your message has been sent.", "feedback-success");
        form.reset();
    } else {
        showFeedback("Sorry, your message could not be sent. Please try again.", "feedback-error");
    }
};
