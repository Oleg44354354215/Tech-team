document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".footer-form");
    const modal = document.querySelector(".footer-modal");
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-overlay";
    document.body.appendChild(modalOverlay);
    modalOverlay.appendChild(modal);

    const emailInput = document.getElementById("email");
    const commentInput = document.getElementById("comment");
    const modalCloseButton = document.querySelector(".modal-btn");

    function closeModal() { 
        modal.style.display = "none";
        modalOverlay.style.display = "none"; 
    }
    
    closeModal();

    function showModal() {
        modalOverlay.style.display = "flex";
    }

    function closeModal() {
        modalOverlay.style.display = "none";
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        showModal();
    });

    modalCloseButton.addEventListener("click", function() {
        closeModal();
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    modalOverlay.addEventListener("click", function(event) {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function fakeBackendRequest(email, comment) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.2) {
                    resolve("Success");
                } else {
                    reject("Error");
                }
            }, 1000);
        });
    }
    
    function showBanner(title, message) {
        const banner = document.getElementById("banner");
        const bannerTitle = document.getElementById("banner-title");
        const bannerMessage = document.getElementById("banner-message");

        bannerTitle.innerText = title;
        bannerMessage.innerText = message;
        banner.style.display = "block";

        setTimeout(() => {
            banner.style.display = "none";
        }, 5000);
    }

    emailInput.addEventListener("input", function() {
        if (emailInput === document.activeElement) {
            successMessage.style.display = "none";
            emailInput.style.borderColor = "";
        }
    });

    emailInput.addEventListener("blur", function() {
        const emailValue = emailInput.value;
        if (validateEmail(emailValue)) {
            emailInput.style.borderColor = "#3CBC81";
            successMessage.style.color = "#3CBC81";
            successMessage.innerText = "Success!";
        } else {
            emailInput.style.borderColor = "#E74A3B";
            successMessage.style.color = "#E74A3B";
            successMessage.innerText = "Invalid email, try again";
        }
        successMessage.style.display = "block";
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const emailValue = emailInput.value;
        const commentValue = commentInput.value;

        if (validateEmail(emailValue)) {
            // Simulate backend request
            fakeBackendRequest(emailValue, commentValue)
                .then(response => {
                    showModal();
                })
                .catch(error => {
                    showModal();
                });
        } else {
            showModal();
        }
    });
});
