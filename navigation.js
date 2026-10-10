const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// Mark the page as JavaScript-enhanced so CSS can apply disclosure behavior.
document.documentElement.classList.add("js");

// Reveal the Menu button now that JavaScript is available.
button.hidden = false;

// Initialize the navigation in its closed narrow-screen state.
list.dataset.open = "false";

// Keep the button's ARIA state and the navigation's visible state synchronized.
function setMenuState(isOpen) {
    button.setAttribute("aria-expanded", String(isOpen));
    list.dataset.open = String(isOpen);
}

// Toggle the menu when the native button is clicked.
button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
});

// Close an open menu with Escape and return keyboard focus to the Menu button.
document.addEventListener("keydown", (event) => {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isOpen) {
        setMenuState(false);
        button.focus();
    }
});

// Add a comment above every logical step explaining what it does and why it is needed.

const workshopForm = document.querySelector("#workshop-form");
const formFeedback = document.querySelector("#form-feedback");

if (workshopForm && formFeedback) {
    workshopForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formFeedback.hidden = false;
    });
}

