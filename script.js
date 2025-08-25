document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Close mobile menu if open
      mobileMenu.classList.add("hidden");

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for fixed header
          behavior: "smooth",
        });

        // Update active nav link
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active");
        });
        this.classList.add("active");
      }
    });
  });

  // Back to Top Button
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove("hidden");
    } else {
      backToTopButton.classList.add("hidden");
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Form Validation
  const infoForm = document.getElementById("infoForm");
  const formSuccess = document.getElementById("formSuccess");

  infoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Validate name
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (!name.value.trim()) {
      nameError.classList.remove("hidden");
      isValid = false;
    } else {
      nameError.classList.add("hidden");
    }

    // Validate email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      emailError.classList.remove("hidden");
      isValid = false;
    } else {
      emailError.classList.add("hidden");
    }

    // Validate phone
    const phone = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    if (!phone.value.trim()) {
      phoneError.classList.remove("hidden");
      isValid = false;
    } else {
      phoneError.classList.add("hidden");
    }

    // Validate program
    const program = document.getElementById("program");
    const programError = document.getElementById("programError");
    if (!program.value) {
      programError.classList.remove("hidden");
      isValid = false;
    } else {
      programError.classList.add("hidden");
    }

    if (isValid) {
      infoForm.reset();
      formSuccess.classList.remove("hidden");

      // Hide success message after 5 seconds
      setTimeout(() => {
        formSuccess.classList.add("hidden");
      }, 5000);
    }
  });

  // Highlight active navigation link based on scroll position
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Course card hover effect
  const courseCards = document.querySelectorAll(".course-card");
  courseCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "";
      this.style.boxShadow = "";
    });
  });
  // WhatsApp Button functionality
  const whatsappBtn = document.getElementById("whatsappBtn");
  const appointmentForm = document.getElementById("appointmentForm");

  if (whatsappBtn && appointmentForm) {
    whatsappBtn.addEventListener("click", function () {
      const name = appointmentForm.querySelector('[name="name"]').value;
      const service = appointmentForm.querySelector('[name="service"]').value;
      const date = appointmentForm.querySelector('[name="date"]').value;

      if (!name) {
        alert("Please enter your name first.");
        return;
      }

      let message = `Hello, I'm ${name}. I would like to book an appointment`;

      if (service) {
        message += ` for ${service}`;
      }

      if (date) {
        message += ` on ${date}`;
      }

      const encodedMessage = encodeURIComponent(message);
      const waNumber = "+211928661250"; // Replace with actual WhatsApp number

      window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank");
    });
  }
});

function initMap() {
  var center = { lat: 4.88318, lng: 31.55979 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: center,
  });

  // Hospital marker (red)
  new google.maps.Marker({
    position: { lat: 4.88318, lng: 31.55979 },
    map: map,
    title: "Hospital",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    },
  });

  // School marker (blue)
  new google.maps.Marker({
    position: { lat: 4.885, lng: 31.561 }, // Example coordinates for a school
    map: map,
    title: "School",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    },
  });
}
// Replace form submit with WhatsApp message
infoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Validate name
  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (!name.value.trim()) {
    nameError.classList.remove("hidden");
    isValid = false;
  } else {
    nameError.classList.add("hidden");
  }

  // Validate email
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  // Validate phone
  const phone = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");
  if (!phone.value.trim()) {
    phoneError.classList.remove("hidden");
    isValid = false;
  } else {
    phoneError.classList.add("hidden");
  }

  // Validate program
  const program = document.getElementById("program");
  const programError = document.getElementById("programError");
  if (!program.value) {
    programError.classList.remove("hidden");
    isValid = false;
  } else {
    programError.classList.add("hidden");
  }

  if (isValid) {
    // Compose WhatsApp message
    const waNumber = "+211928661250"; // Replace with actual WhatsApp number
    let message = `Hello, my name is ${name.value}. I am interested in the ${program.value} program. My email is ${email.value} and my phone number is ${phone.value}.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank");
  }
});

document.getElementById("infoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const program = document.getElementById("program").value;

  if (!name || !email || !phone || !program) {
    alert("Please fill in all fields.");
    return;
  }

  // WhatsApp number (replace with your number, no + or spaces)
  const whatsappNumber = "211928661250";

  // Your email (for fallback)
  const fallbackEmail = "info@yourdomain.com";

  const message = `Hello, I would like to request more info:\n
*Full Name:* ${name}\n
*Email:* ${email}\n
*Phone:* ${phone}\n
*Program of Interest:* ${program}`;

  // WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Email fallback
  const emailSubject = "Program Inquiry";
  const emailBody = message.replace(/\*/g, ""); // remove bold markers for email
  const emailUrl = `mailto:${fallbackEmail}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  // Try opening WhatsApp
  const win = window.open(whatsappUrl, "_blank");

  // If WhatsApp cannot open, fallback to email after short delay
  setTimeout(() => {
    if (!win || win.closed || typeof win.closed === "undefined") {
      window.location.href = emailUrl;
    }
  }, 1500);

  document.getElementById("formSuccess").classList.remove("hidden");
  this.reset();
});
