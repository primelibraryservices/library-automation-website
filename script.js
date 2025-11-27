/* ==========================================================
   PRIME LIBRARY WEBSITE JAVASCRIPT
   ✔ Service Modal Pop-up (image + text + CTA)
   ✔ Mobile Navigation Toggle
   ✔ WhatsApp Contact Form Sender (with School/Institution)
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       SERVICE MODAL POPUP
    =============================== */

    const modal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.getElementById("modalClose");

    const serviceInfo = {
        cataloging: {
            title: "Cataloging & DDC",
            text: "Full classification using Dewey Decimal System, spine labels, accession registers, and librarian indexing training.",
            img: "img/cataloging.jpg"
        },
        repair: {
            title: "Book Repair & Restoration",
            text: "Hardcover & paperback repair, rebinding, lamination, spine reinforcement, archival paper preservation.",
            img: "img/repair.jpg"
        },
        software: {
            title: "Library Software Installation",
            text: "Digital library cataloging, barcode issuing, book search, user accounts, reporting, and librarian training.",
            img: "img/software.jpg"
        },
        borrow: {
            title: "Borrowing & Return Systems",
            text: "Barcode scanning, student ID tracking, automated fines, overdue notifications, and full borrowing logs.",
            img: "img/borrow.jpg"
        }
    };

    document.querySelectorAll(".service-card-big").forEach(card => {
        card.style.cursor = "pointer";
        card.addEventListener("click", () => {
            const key = card.getAttribute("data-service");
            const info = serviceInfo[key];
            if (!info) return;

            modalTitle.textContent = info.title;
            modalText.textContent = info.text;
            modalImg.src = info.img;
            modalImg.alt = info.title;

            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    });

    // Close modal
    closeBtn?.addEventListener("click", () => closeModal());
    window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }


    /* ===============================
       MOBILE MENU TOGGLE
    =============================== */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector("nav");

    menuToggle?.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
    });

    document.querySelectorAll("nav a").forEach(a => {
        a.addEventListener("click", () => nav.classList.remove("show-menu"));
    });


    /* ===============================
       WHATSAPP CONTACT FORM SENDER
    =============================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let school = document.getElementById("school").value.trim();
            let message = document.getElementById("message").value.trim();

            if (!name || !email || !school || !message) {
                alert("Please fill out all fields before sending.");
                return;
            }

            let phone = "256770385589"; // YOUR WHATSAPP NUMBER

            let text =
                `New Inquiry From PrimeLibrary Website%0A%0A` +
                `*Name:* ${name}%0A` +
                `*Email:* ${email}%0A` +
                `*School/Institution:* ${school}%0A` +
                `*Message:* ${message}`;

            let url = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
            window.open(url, "_blank");
        });
    }

});
