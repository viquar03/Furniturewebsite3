document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    hamburger.addEventListener("click", () => navMenu.classList.toggle("active"));

    // Filter Tabs
    const tabs = document.querySelectorAll(".tab");
    const cards = document.querySelectorAll(".item-card");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const type = tab.dataset.type;
            cards.forEach(card => {
                card.classList.toggle("hidden", type !== "all" && card.dataset.type !== type);
            });
        });
    });

    // Quote Popup
    const popup = document.getElementById("popup");
    const popupItem = document.getElementById("popupItem");
    const showPopup = (label) => {
        popupItem.textContent = "Item: " + label;
        popup.style.display = "flex";
    };

    document.querySelectorAll(".quote-trigger").forEach(btn => {
        btn.addEventListener("click", () => showPopup(btn.dataset.product));
    });
    document.getElementById("visitBtn").addEventListener("click", () => showPopup("Free Home Measurement Visit"));
    document.getElementById("closePopup").addEventListener("click", () => popup.style.display = "none");
    window.addEventListener("click", (e) => { if (e.target === popup) popup.style.display = "none"; });

    document.getElementById("popupForm").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Request received! Our carpenter will call you soon.");
        e.target.reset();
        popup.style.display = "none";
    });

    // Main Form
    document.getElementById("inquiryForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("custName").value;
        document.getElementById("formNote").textContent = `Thank you ${name}! We have received your inquiry.`;
        e.target.reset();
    });

    // WhatsApp Button
    document.getElementById("whatsappDirect").addEventListener("click", () => {
        window.open("https://wa.me/919876543210?text=Hello%20Artisan%20Woodworks!%20I%20would%20like%20to%20inquire%20about%20custom%20furniture.", "_blank");
    });
});