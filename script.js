const hero = document.getElementById("hero-section");
const topBtn = document.getElementById("to-top-btn");
const projects = document.querySelectorAll(".project");
const featuredProjectText = document.querySelector(".featured-projects");
const hamburger = document.getElementById("hamburger");
const hamburgerIcon = document.querySelector("i");
const navLinks = document.getElementById("nav-links");

const wrapper = document.querySelector(".projects-wrapper");
const prevBtn = document.querySelector(".next-project-btn.prev");
const nextBtn = document.querySelector(".next-project-btn.next");

// for projects mobile view
let index = 0;
const totalProjects = projects.length;
function showProject(i) {
  if (i < 0) i = 0;
  if (i >= totalProjects) i = totalProjects - 1;
  index = i;

  const offset = -index * 100;
  wrapper.style.transform = `translateX(${offset}%)`;
}
prevBtn.addEventListener("click", () => showProject(index - 1));
nextBtn.addEventListener("click", () => showProject(index + 1));

// for nav-links mobile view
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Toggle icon between bars and xmark
  if (hamburgerIcon.classList.contains("fa-bars")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
  } else {
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
  }
});
// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
  })
);

// desktop view
// ================ FUNCTIONS ================
function sendMail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Build Gmail compose URL
  const subject = `Portfolio Inquiry from ${name}`;
  const body = `Hi Uno,\n\n${message}\n\nFrom: ${name} (${email})`;

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=unoysmael.serato@gmail.com&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open Gmail compose in new tab
  window.open(gmailLink, "_blank");
}

function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`Copied: ${text}`);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

// Opens Google Maps for the given location
function openLocation(location) {
  const text = document.getElementById(location).textContent;
  const query = encodeURIComponent(text);
  window.open(
    `https://www.google.com/maps/search/?api=1&query=${query}`,
    "_blank"
  );
}

// ================ SCROLL LISTENER ================
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > hero.clientHeight - 10) {
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});

projects.forEach((project) => {
  project.addEventListener("mouseenter", () => {
    featuredProjectText.classList.add("hidden");
  });

  project.addEventListener("mouseleave", () => {
    featuredProjectText.classList.remove("hidden");
  });
});

// ================ PARTICLES JS ================
particlesJS("particles-js", {
  particles: {
    number: { value: 150, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.7 } },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});
