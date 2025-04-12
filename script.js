document.addEventListener("DOMContentLoaded", function () {

  const typed = new Typed(".text", {
    strings: ["Freelancer", "Frontend Developer", "Consultant"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          document.querySelector(`header nav a[href*="${id}"]`)?.classList.add("active");
        });
      }
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      document.body.classList.toggle("light-mode");
    });
  }

  // Handle form validation
  const form = document.querySelector("form");
  form?.addEventListener("submit", function (e) {
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      e.preventDefault();
    } else {
      alert("Thank you for your message!");
    }
  });
});

