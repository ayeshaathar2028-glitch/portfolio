const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceSelect = document.querySelector("#service");
    if (serviceSelect) serviceSelect.value = link.dataset.service;
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

/*
  IMPORTANT BEFORE PUBLISHING:
  Replace this placeholder with your real professional email address.
  The contact form opens the visitor's default email app; it does not send
  data to a server or store personal information.
*/
const CONTACT_EMAIL = "YOUR_EMAIL@example.com";

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (CONTACT_EMAIL === "YOUR_EMAIL@example.com") {
      formStatus.textContent = "Setup needed: open script.js and replace YOUR_EMAIL@example.com with your real email address before using this form.";
      formStatus.style.color = "#a15a1a";
      return;
    }

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const business = String(formData.get("business") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBusiness: ${business || "Not provided"}\nService: ${service}\n\nProject goals:\n${message}`
    );

    formStatus.textContent = "Your email app should open with the inquiry prepared. Please review and send it there.";
    formStatus.style.color = "#237b6f";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}
